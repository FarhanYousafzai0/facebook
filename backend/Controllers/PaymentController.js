import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_KEY);

const makePayment = async (req, res) => {
  try {
    const { name, image, price } = req.body;

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: name,
            images: [image],
          },
          unit_amount: 100 * price,
        },
        quantity: 1,
      }
    ];

    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:5174/market',
      cancel_url: 'http://localhost:5174/market',
    });

    res.send(JSON.stringify({ url: stripeSession.url }));

  } catch (error) {
    console.error("Stripe Payment Error:", error.message);
    res.status(500).json({ error: "Payment session creation failed" });
  }
};


export default makePayment