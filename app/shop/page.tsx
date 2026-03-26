import Link from "next/link";

const shopCollections = [
  {
    name: "Classic Comfort Box",
    price: "EUR 18",
    description: "Pork, chive and ginger dumplings with chili crunch, soy dip and cucumber salad.",
    details: "12 dumplings · best for 1-2 people",
    subject: "Classic Comfort Box",
  },
  {
    name: "Green Garden Box",
    price: "EUR 17",
    description: "Spinach, tofu and shiitake dumplings with sesame greens and house pickles.",
    details: "12 dumplings · vegetarian",
    subject: "Green Garden Box",
  },
  {
    name: "Ballroom Feast Box",
    price: "EUR 34",
    description: "A mixed dumpling spread with two sauces, smashed cucumbers and a rotating side dish.",
    details: "24 dumplings · built for sharing",
    subject: "Ballroom Feast Box",
  },
];

const fulfillmentNotes = [
  "Direct ordering from the Damn Good Dumplings site instead of redirecting guests to a marketplace.",
  "A delivery-first layout that can later connect to a Wolt Drive checkout and shipment flow.",
  "Clear pickup and local-delivery messaging for guests who want to order fast.",
];

const orderSteps = [
  "Choose a dumpling box that fits your table.",
  "Send your order request directly to the team from this page.",
  "Confirm pickup or local delivery details once the order is accepted.",
];

export default function ShopPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
          <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-coral/40 bg-coral/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                Online shop
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-yellow sm:text-5xl">
                  Order dumpling boxes directly from Ballroom.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                  This is the new first stop for delivery orders. Instead of sending guests to Foodora,
                  the delivery button now opens an in-house shop page that can grow into a direct Wolt Drive checkout.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#boxes"
                  className="rounded-full bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-85"
                >
                  Browse boxes
                </Link>
                <Link
                  href="mailto:hello@dgd-ballroom.at?subject=Direct%20Order%20Request"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-coral hover:text-coral"
                >
                  Order by email
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-coral/20 bg-background/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-coral">Direct delivery flow</p>
              <div className="mt-6 space-y-4">
                {fulfillmentNotes.map((note) => (
                  <div key={note} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/80">
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="boxes" className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-coral">Shop the menu</p>
              <h2 className="text-3xl font-bold text-yellow">Popular dumpling boxes</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              A simple storefront now, with room for address collection, delivery pricing and courier dispatch later.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {shopCollections.map((collection) => (
              <article
                key={collection.name}
                className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{collection.details}</p>
                  </div>
                  <span className="rounded-full bg-coral px-3 py-1 text-sm font-bold text-background">
                    {collection.price}
                  </span>
                </div>

                <p className="flex-grow text-sm leading-6 text-white/80">{collection.description}</p>

                <Link
                  href={`mailto:hello@dgd-ballroom.at?subject=${encodeURIComponent(`Order Request: ${collection.subject}`)}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-coral px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-0.5"
                >
                  Request this box
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-coral">How it works</p>
            <div className="mt-5 space-y-4">
              {orderSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-background/40 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow font-bold text-background">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-yellow/20 bg-yellow p-6 text-background">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">Local orders</p>
            <h2 className="mt-4 text-3xl font-bold">Keep delivery traffic on your own site.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-background/80">
              The navbar delivery button now lands here first. That gives you a direct ordering surface today and a clean place to connect Wolt Drive shipment quotes, address validation and tracking later without sending guests to a third-party marketplace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:hello@dgd-ballroom.at?subject=Delivery%20Question"
                className="rounded-full bg-background px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
              >
                Ask about delivery
              </Link>
              <Link
                href="/menu"
                className="rounded-full border border-background/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-background transition-colors hover:border-background"
              >
                View full menu
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}