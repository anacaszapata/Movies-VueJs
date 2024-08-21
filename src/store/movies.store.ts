import type { Movie } from "@/model/movie.model";
import HTTP from "@/api/client-http"
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as  Movie[]
    }),
    actions: {
        async getMovies(search:string = 'movies'){
            if (search == "movies"){
                search = "bat"
            }
            const resp =  await HTTP.get('',{
                params: {
                    s: search
                }
            })
            this.listMovies = resp.data.Search;
        }
    }
})