export default class Project {
	static async all() {
		return await Promise.all(
			Object.entries(import.meta.glob("./projects/**/*.md")).map(async ([path, resolver]) => {
				const { metadata: data } = await resolver()
				const slug = path.split("/").pop().slice(0, -3)
				return { slug, data }
			})
		)
	}
}
