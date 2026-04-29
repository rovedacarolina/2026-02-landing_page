import Project from "$lib/content/project"

export const load = async () => {
	return { projects: await Project.all() }
}
