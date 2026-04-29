/**
 * @typedef {Object} ProjectData
 * @property {string} slug
 * @property {any} data
 */

/**
 * @typedef {Object} YearGroup
 * @property {number} number
 * @property {ProjectData[]} projects
 */

export default class Project {
	static async all() {
		return await Promise.all(
			Object.entries(import.meta.glob("./projects/**/*.md")).map(async ([path, resolver]) => {
				/** @type {any} */
				const module = (await resolver?.()) || {};
				const { metadata: data } = module;
				const slug = path.split("/").pop()?.slice(0, -3) || "";
				return { slug, data };
			})
		)
	}
}
