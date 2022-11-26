/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    { template
      id: "P1",
      name: "Name 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  {
    id: `001`,
    name: `Series Apex 3`,
    description: `The Apex 3 is your first step into next level gaming. Build to outshine, outperform, and outlast the competition.`,
    price: 4900,
    discontinued: false,
    categories: ["all-keyboards", "full-keyboards"],
    imageUrl: 'img/key3.jpg'
  },

  {
    id: `002`,
    name: `Redragon K552`,
    description: `Redragon k552 mechanical red switches Linear switches quiet click sound fast action with minimal resistance`,
    price: 4599,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards"],
    imageUrl: 'img/key4.jpg'
  },

  {
    id: `003`,
    name: `Corsair K70`,
    description: `Aircraft grade anodized brushed aluminum frame, built to withstand a lifetime of gaming`,
    price: 22600,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key6.jpg'
  },

  {
    id: `004`,
    name: `KLUDGE RK84`,
    description: `Believe it or not, this is the first generation of RGB three-mode wireless keyboards on the market.`,
    price: 10999,
    discontinued: true,
    categories: ["all-keyboards", "optical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key2.jpg'
  },

  {
    id: `005`,
    name: `Tezarre TK61Pro Season`,
    description: `16.8 million color combinations of RGB modes including Wave, Twinkle, Aurora, Musical Rhythm, Radar and Ripple`,
    price: 5085,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key5.jpg'
  },

  {
    id: `006`,
    name: `YUNZII SK61`,
    description: `Hot-swap keyboard with optical switch allows you to change switches without soldering`,
    price: 8800,
    discontinued: false,
    categories: ["all-keyboards", "compact-keyboards"],
    imageUrl: 'img/key1.jpg'
  },

  {
    id: `007`,
    name: `Corsair K100`,
    description: `The K100 RGB is the pinnacle of CORSAIR keyboards, offering the cutting-edge performance, style and durability.`,
    price: 26999,
    discontinued: false,
    categories: ["all-keyboards", "full-keyboards", "optical-keyboards"],
    imageUrl: 'img/key4.jpg'
  },

  {
    id: `008`,
    name: `Logitexh MX `,
    description: `Spherically dished keys match the shape of your fingertips, offering satisfying feedback with every tap`,
    price: 14900,
    discontinued: false,
    categories: ["all-keyboards", "full-keyboards"],
    imageUrl: 'img/key2.jpg'
  },

  {
    id: `009`,
    name: `Logitech ERGO k8`,
    description: `Type more naturally with a curved, split KeyFrame. The sloping keyboard reduces strain on your wrists and forearms.`,
    price: 12999,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards"],
    imageUrl: 'img/key5.jpg'
  },

  {
    id: `010`,
    name: `MSI Vigor `,
    description: `Brushed metal top plate and octagonal-shaped keycaps.`,
    price: 8299,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key6.jpg'
  },

  {
    id: `011`,
    name: `Logitexh G213`,
    description: `A million combinations of lights`,
    price: 5259,
    discontinued: true,
    categories: ["all-keyboards", "compact-keyboards"],
    imageUrl: 'img/key2.jpg'
  },

  {
    id: `012`,
    name: `StellSeries Apex`,
    description: `World's fastest keyboard`,
    price: 29999,
    discontinued: true,
    categories: ["all-keyboards", "optical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key4.jpg'
  },

  {
    id: `013`,
    name: `Hp Omen`,
    description: `Features durable mechanical switches available in Blue (clicky), Brown (tactile) and Red (smooth linear) to meet your typing preference.`,
    price: 19980,
    discontinued: false,
    categories: ["all-keyboards", "optical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key3.jpg'
  },

  {
    id: `014`,
    name: `Keychron K6`,
    description: `Laser Engraved Keycaps shine through ABS keycaps provide crisp legible legends in fully lit and dimly lit settings.`,
    price: 19099,
    discontinued: false,
    categories: ["all-keyboards", "optical-keyboards", "compact-keyboards"],
    imageUrl: 'img/key1.jpg'
  },

  {
    id: `015`,
    name: `MX Mater 32`,
    description: `Exclusive ROG switches feature centralized RGB lighting for all-round in-key illumination.`,
    price: 4900,
    discontinued: true,
    categories: ["all-keyboards", "compact-keyboards"],
    imageUrl: 'img/key6.jpg'
  },

  {
    id: `0016`,
    name: `Asus ROG`,
    description: `Use Bluetooth to connect and switch between three devices at a time, enjoy up to 76 hours of low-latency gameplay in 2.4 GHz RF wireless mode, or use standard wired USB`,
    price: 22294,
    discontinued: false,
    categories: ["all-keyboards", "full-keyboards", "optical-keyboards"],
    imageUrl: 'img/key2.jpg'
  },

  {
    id: `017`,
    name: `Glorious GMMK`,
    description: `As the first Hot Swap RGB gaming keyboard, GMMK features hot swap switch sockets so you can plug in and out switches as your DIY preference.`,
    price: 3200,
    discontinued: false,
    categories: ["all-keyboards", "optical-keyboards"],
    imageUrl: 'img/key4.jpg'
  },

  {
    id: `018`,
    name: `Seneca Series S`,
    description: `Superior Ergonomics and Compatibility: With the in built stand, angle of the keyboard can be changed to match a more ergonomic typing experience.`,
    price: 1000,
    discontinued: true,
    categories: ["all-keyboards", "mechanical-keyboards"],
    imageUrl: 'img/key5.jpg'
  },

  {
    id: `019`,
    name: `Seneca Major`,
    description: `kit comes with OEM sculpted keycaps so your fingers and hand joints can preserve the jelly like substance and do not become stiff over time.`,
    price: 1800000000000000000,
    discontinued: true,
    categories: ["all-keyboards", "optical-keyboards"],
    imageUrl: 'img/key1.jpg'
  },

  {
    id: `020`,
    name: `Bluff z-77`,
    description: `60% mechanical keyboard adopts advanced metal panel design, beautiful and strong.`,
    price: 18000,
    discontinued: false,
    categories: ["all-keyboards", "optical-keyboards", "mechanical-keyboards", "full-keyboards"],
    imageUrl: 'img/key5.jpg'
  },

  {
    id: `021`,
    name: `AlienHouse Green Saber`,
    description: `red switches mechanical keyboard adopted with classic red switches, that responds fast with no lag.`,
    price: 8400,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards", "full-keyboards"],
    imageUrl: 'img/key2.jpg'
  }
];
