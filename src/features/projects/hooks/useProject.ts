import { useEffect, useState } from "react"
import type { ProjectsDataMock } from "../interface";
import { projectsMockData } from "../utils/mockData";

export const useProject = () => {
    const [projects, setProjects] = useState<ProjectsDataMock[]>([]);

    useEffect(() => {
        setProjects(projectsMockData)
    }, []);

    return {
        listProjects: projects
    }
}