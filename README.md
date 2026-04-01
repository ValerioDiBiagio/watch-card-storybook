# ⌚ Watch Card Design System

Un sistema di componenti modulare e scalabile per la visualizzazione di orologi di lusso, sviluppato con **React** e documentato attraverso **Storybook**. Questo progetto segue i principi dell'Atomic Design, partendo dalle fondamenta (token) fino ad arrivare all'organismo complesso `WatchCard`.

---

## 🎨 Design Tokens

Il progetto si basa su un set di variabili globali che garantiscono coerenza visiva e facilità di manutenzione.

### 🔡 Typography & Spacing
Ho definito una gerarchia tipografica chiara per distinguere Brand, Modello e Specifiche tecniche. 
* **Spacing:** Implementato tramite un sistema dinamico con funzione `clamp()`, che permette ai margini e ai padding di adattarsi fluidamente tra viewport minimi (400px) e massimi (1200px).

### 🌈 Color Palette
La palette è stata studiata per comunicare istantaneamente lo stato del prodotto:
* **Brand Colors:** Blu primario per le azioni principali.
* **Semantic Colors:** * `Green`: Per i prodotti "New Arrival".
  * `Red`: Per indicare sconti e promozioni.
  * `Gray`: Per prodotti non disponibili o "Sold Out".

---

## 🧱 Componenti

### 1. Fondamenta (Atomi)
* **Badge:** Componente versatile per etichettare i prodotti (es. "New", "-20%", "Sold Out").
* **Button:** Pulsante principale con stati `Hover`, `Active` e `Disabled`. Supporta label dinamiche come "Add to cart" o "Not available".

### 2. WatchCard (Organismo)
Il cuore del progetto. La card integra l'immagine del prodotto, le informazioni testuali e la logica di business.

**Caratteristiche principali:**
* **Gestione Prezzi:** Supporto per prezzo originale e prezzo scontato (con formattazione automatica).
* **Referenza:** Spazio dedicato al codice tecnico del modello.
* **Stati Dinamici:** La card cambia aspetto e funzionalità in base alla disponibilità (es. pulsante disabilitato se il prodotto è esaurito).

---

## 🛠️ Storybook Integration

Utilizziamo Storybook per isolare i componenti e testare ogni possibile permutazione.

* **Controls:** Permette di cambiare in tempo reale brand, prezzi, immagini e varianti dei badge.
* **Dark Mode:** Supporto nativo per il tema scuro, garantendo che ogni componente mantenga un contrasto elevato e un aspetto premium anche su sfondi dark.
* **Responsive Testing:** Grazie ai token fluidi, è possibile testare il comportamento della card a diverse risoluzioni direttamente nell'interfaccia di Storybook.

---

## 🚀 Guida all'uso

### Installazione
```bash
git clone https://github.com/ValerioDiBiagio/watch-card-storybook.git
cd watch-card-storybook
npm install
npm run storybook
```