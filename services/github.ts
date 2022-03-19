import {repository} from "../_data/git";
import {Packagist} from "./interfaces/Packagist";

export async function getRepoInfos(): Promise<Packagist> {
    const url = "https://packagist.org/packages/danielebarbaro/" + repository.list[0] +".json"
    try {
        const stats = await fetch(url);
        return  stats.json();
    } catch (error) {
        console.log(error);
    }
}
