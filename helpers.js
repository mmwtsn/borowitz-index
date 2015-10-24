import cheerio from 'cheerio'

/**
 * Parses the New Yorker's homepage HTML and returns an array of author names.
 *
 * @param {string} html
 * @returns {string[]}
 */
export function parse (html) {
  const $ = cheerio.load(html)

  const authors = $('#popular-list h3 span a').map((i, el) => {
    return el.children[0].data
  }).get().slice(0, 5)

  return authors
}

/**
 * Counts number of occurrences of 'Borowitz' in an array of strings.
 *
 * @param {string[]} names
 * @returns {number}
 */
export function count (names) {
  return names.filter(e => e.match(/Borowitz/)).length
}
