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
    {
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
    categories: ["all-keyboards", "full-keyboards"]
  },

  {
    id: `002`,
    name: `Redragon K552`,
    description: `Redragon k552 mechanical red switches Linear switches quiet click sound fast action with minimal resistance`,
    price: 4599,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards"]
  },

  {
    id: `003`,
    name: `Corsair K70`,
    description: `Aircraft grade anodized brushed aluminum frame, built to withstand a lifetime of gaming`,
    price: 22600,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards"]
  },

  {
    id: `004`,
    name: `KLUDGE RK84`,
    description: `Believe it or not, this is the first generation of RGB three-mode wireless keyboards on the market.`,
    price: 10999,
    discontinued: true,
    categories: ["all-keyboards", "optical-keyboards", "compact-keyboards"]
  },

  {
    id: `005`,
    name: `Tezarre TK61Pro`,
    description: `16.8 million color combinations of RGB modes including Wave, Twinkle, Aurora, Musical Rhythm, Radar and Ripple`,
    price: 5085,
    discontinued: false,
    categories: ["all-keyboards", "mechanical-keyboards", "compact-keyboards"]
  },

  {
    id: `006`,
    name: `YUNZII SK61`,
    description: `Hot-swap keyboard with optical switch allows you to change switches without soldering`,
    price: 8800,
    discontinued: false,
    categories: ["all-keyboards", "compact-keyboards"]
  },

  {
    id: `007`,
    name: `Corsair K100`,
    description: `The K100 RGB is the pinnacle of CORSAIR keyboards, offering the cutting-edge performance, style and durability.`,
    price: 26999,
    discontinued: false,
    categories: ["all-keyboards", "full-keyboards", "optical-keyboards"]
  },

  {
    id: `008`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  },

  {
    id: `009`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  },

  {
    id: `010`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  },

  {
    id: `002`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  },

  {
    id: `002`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  },

  {
    id: `002`,
    name: ``,
    description: ``,
    price: 1,
    discontinued: false,
    categories: [
      "all-keyboards",
      "full-keyboards",
      "mechanical-keyboards",
      "optical-keyboards",
      "compact-keyboards"
    ]
  }
];
