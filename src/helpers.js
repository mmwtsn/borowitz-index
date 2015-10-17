import cheerio from 'cheerio'

/**
 * Parses the New Yorker's homepage HTML and returns the number of stories
 * written by Andy Borowitz from the "Most Read" list.
 *
 * @param {string} html
 * @returns {number}
 */
export function parse (html) {
  const $ = cheerio.load(html)

  const authors = $('#most-popular h3 a').map((i, el) => {
    return el.children[0].data
  }).get()

  return authors.filter(e => e.match(/Borowitz/)).length
}
