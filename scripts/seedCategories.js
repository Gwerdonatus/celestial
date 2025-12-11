import { client } from "../lib/sanity.js"; // add .js extension!


const categories = [
  'Crystals',
  'Candles',
  'Herbs',
  'Smudge Sticks',
  'Incense',
  'Spiritual Books',
  'Oils',
  'Talismans & Amulets',
  'Ritual Kits',
  'Meditation Tools',
  'Spiritual Jewelry',
]

async function seedCategories() {
  for (const title of categories) {
    const slug = title.toLowerCase().replace(/\s+/g, '-')
    const existing = await client.fetch(
      `*[_type == "category" && title == $title]`,
      { title }
    )

    if (existing.length === 0) {
      await client.create({
        _type: 'category',
        title,
        slug: { current: slug },
      })
      console.log(`Created category: ${title}`)
    } else {
      console.log(`Category already exists: ${title}`)
    }
  }
}

seedCategories()
  .then(() => {
    console.log('All categories seeded!')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
