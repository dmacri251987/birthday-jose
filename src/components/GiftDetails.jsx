import { useEffect, useRef, useState } from "react";
import eventData from "../data/event";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./GiftDetails.css";

const allGiftDetails = `CVU: ${eventData.regaloCvu}\nAlias: ${eventData.regaloAlias}`;

function copyWithTextarea(text) {
  if (typeof document === "undefined" || !document.body) {
    throw new Error("No hay un documento disponible para copiar.");
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.setAttribute("aria-hidden", "true");
  textarea.tabIndex = -1;
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);

  let copied = false;

  try {
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    copied =
      typeof document.execCommand === "function" && document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  if (!copied) {
    throw new Error("El navegador no pudo copiar los datos.");
  }
}

async function copyText(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      return copyWithTextarea(text);
    }
  }

  return copyWithTextarea(text);
}

export default function GiftDetails() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });
  const feedbackTimeoutRef = useRef(null);
  const [copiedTarget, setCopiedTarget] = useState(null);
  const [copyError, setCopyError] = useState("");

  useEffect(
    () => () => {
      if (feedbackTimeoutRef.current !== null) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
    },
    [],
  );

  const scheduleFeedbackReset = (delay) => {
    if (feedbackTimeoutRef.current !== null) {
      window.clearTimeout(feedbackTimeoutRef.current);
    }

    feedbackTimeoutRef.current = window.setTimeout(() => {
      setCopiedTarget(null);
      setCopyError("");
      feedbackTimeoutRef.current = null;
    }, delay);
  };

  const handleCopy = async (target, value) => {
    if (feedbackTimeoutRef.current !== null) {
      window.clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }

    setCopiedTarget(null);
    setCopyError("");

    try {
      await copyText(value);
      setCopiedTarget(target);
      scheduleFeedbackReset(2500);
    } catch {
      setCopyError("No se pudo copiar. Seleccioná el dato y copialo manualmente.");
      scheduleFeedbackReset(4000);
    }
  };

  return (
    <section className="gift-details" id="regalos" aria-labelledby="gift-details-title">
      <div className="gift-details__container animate-on-scroll" ref={containerRef}>
        <div className="gift-details__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="7" y="17" width="34" height="24" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 24H41" stroke="currentColor" strokeWidth="1.2" />
            <path d="M24 17V10" stroke="currentColor" strokeWidth="1.2" />
            <path d="M24 11C21 6 15 7 16 11C17 14 21 12 24 11Z" stroke="currentColor" strokeWidth="1" />
            <path d="M24 11C27 6 33 7 32 11C31 14 27 12 24 11Z" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <h2 className="gift-details__title" id="gift-details-title">Un regalito</h2>
        <p className="gift-details__message">{eventData.regaloMensaje}</p>

        <div className="gift-details__card">
          <div className="gift-details__row" role="group" aria-label="CVU">
            <div className="gift-details__data">
              <span className="gift-details__label">CVU</span>
              <span className="gift-details__value">{eventData.regaloCvu}</span>
            </div>
            <button
              type="button"
              className={`gift-details__copy-button${copiedTarget === "cvu" ? " gift-details__copy-button--copied" : ""}`}
              onClick={() => handleCopy("cvu", eventData.regaloCvu)}
              aria-label={copiedTarget === "cvu" ? "CVU copiado" : "Copiar el CVU"}
            >
              {copiedTarget === "cvu" ? "¡Copiado!" : "Copiar"}
            </button>
          </div>

          <div className="gift-details__row" role="group" aria-label="Alias">
            <div className="gift-details__data">
              <span className="gift-details__label">Alias</span>
              <span className="gift-details__value">{eventData.regaloAlias}</span>
            </div>
            <button
              type="button"
              className={`gift-details__copy-button${copiedTarget === "alias" ? " gift-details__copy-button--copied" : ""}`}
              onClick={() => handleCopy("alias", eventData.regaloAlias)}
              aria-label={copiedTarget === "alias" ? "Alias copiado" : "Copiar el alias"}
            >
              {copiedTarget === "alias" ? "¡Copiado!" : "Copiar"}
            </button>
          </div>
        </div>

        <button
          type="button"
          className={`btn gift-details__copy-all${copiedTarget === "all" ? " gift-details__copy-all--copied" : ""}`}
          onClick={() => handleCopy("all", allGiftDetails)}
          aria-label={copiedTarget === "all" ? "CVU y alias copiados" : "Copiar el CVU y el alias juntos"}
        >
          {copiedTarget === "all" ? "¡Copiado!" : "Copiar todos los datos"}
        </button>

        <p
          className={`gift-details__feedback${copyError ? " gift-details__feedback--error" : ""}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {copyError}
          {copiedTarget && <span className="gift-details__sr-only">¡Copiado!</span>}
        </p>

        <div className="gift-details__ornament" aria-hidden="true">
          <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
            <path d="M0 6H30M50 6H80" stroke="currentColor" strokeWidth="0.5" />
            <path d="M36 6L40 2L44 6L40 10Z" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
