# 🍝 La Tavola - Food Delivery App

Food delivery app per il ristorante italiano "La Tavola" - Autentica cucina italiana dal 1985.

## ✨ Funzionalità

- **Homepage** con hero section e menu interattivo
- **Filtro categorie**: Tutti, Antipasti, Primi, Secondi, Pizze, Dolci, Bevande
- **Griglia piatti** con 25+ piatti italiani autentici
- **Carrello laterale** animato con drawer
- **Pagina carrello** completa con riepilogo
- **Checkout a 3 step**: Dati consegna → Pagamento → Conferma
- **Pagina conferma ordine** con numero ordine generato
- **Badge carrello** animato nella navbar
- **Stato globale** con Zustand

## 🛠️ Tecnologie

- **React 19** con Vite
- **Tailwind CSS** per lo styling
- **Framer Motion** per le animazioni
- **Zustand** per la gestione dello stato
- **React Router DOM** per il routing
- **React Icons** per le icone

## 🚀 Installazione

```bash
# Clona il repository
git clone https://github.com/tuo-username/la-tavola.git

# Entra nella directory
cd la-tavola

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## 📦 Build

```bash
# Build per la produzione
npm run build

# Anteprima della build
npm run preview
```

## 🎨 Design

- **Colori caldi**: Rosso #dc2626, Arancione #ea580c
- **Font**: Playfair Display (titoli), Inter (testo)
- **Card con ombre morbide**
- **Animazioni fluide** su hover e click

## 📱 Pagine

| Pagina                | Descrizione                 |
| --------------------- | --------------------------- |
| `/`                   | Homepage con hero e menu    |
| `/cart`               | Carrello con lista prodotti |
| `/checkout`           | Checkout a 3 step           |
| `/order-confirmation` | Conferma ordine             |

## 🍕 Menu

25+ piatti italiani suddivisi in:

- Antipasti (4 piatti)
- Primi (5 piatti)
- Secondi (4 piatti)
- Pizze (4 piatti)
- Dolci (4 piatti)
- Bevande (4 prodotti)
