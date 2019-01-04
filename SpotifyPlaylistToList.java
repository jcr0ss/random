package com.bangers;

import com.google.gson.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.util.ArrayList;

public class SpotifyPlaylistToList {
    public static void main(String[] args) throws Exception{
        ArrayList<String> urls = new ArrayList<String>();
        urls.add("https://api.spotify.com/v1/users/edmsauce/playlists/3yGp845Tz2duWCORALQHFO/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/cldkid/playlists/5xoeDi8mJUDwyRZtiFNZ2X/tracks?offset");
        urls.add("https://api.spotify.com/v1/users/alltrapnation/playlists/6kGK3HcwY0vpQMiPBZ7h1I/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/alltrapnation/playlists/0NCspsyf0OS4BsPgGhkQXM/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/prxmusic/playlists/3VEFRGe3APwGRl4eTpMS4x/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/1112337683/playlists/4W7jnrqeKfVEnb1BVHMG5b/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/futureofhouse/playlists/7DyH8C8HXh5RzYKKEy2BQI/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/beatportprofile/playlists/0fLMV5ajwDqRbV5ceAVIqY/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/officialtrapcity/playlists/7Kk0KvfzcaX4QLtli1rIBK/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/nightgen/playlists/1fz7PKa9SpZvxDMCp3aiJO/tracks?offset=");
        urls.add("https://api.spotify.com/v1/users/alltrapnation/playlists/6RcLSYMyhgoHYKLGRkNYNf/tracks?offset=");
        for(String currentUrl : urls){
            for(int o = 0; o < 1000; o = o + 100){
                String url = currentUrl+o+"&country=US";
                Document document = Jsoup.connect(url).ignoreContentType(true).header("Authorization", "Bearer BQCqmDKuwFyvavHgFMdoyyCXcQ3IK3gRO6busDHcbDVIRaHM39vTNZ6VM7PBUp3uHybRv5wBnoqYY50oBzyqj6n_Xozuqdyld0udzxOKmh4lLwfrIN91aTl0uZIFlRPW4hzPbgyeHbZay2ggV_rnSuQALb6vbeWQ4sBflx80JsQ4vIuDUDgbiRi31LuX56tk-lJe4XKqpIMh9VCzJLRHdWFwuijPC_wQ5Q").get();
                String json = document.select("body").text();
                JsonObject tracks = new JsonParser().parse(json).getAsJsonObject();
                JsonArray items = tracks.getAsJsonArray("items");
                for(int i = 0; i< items.size(); i++){
                    if(items.get(i).getAsJsonObject().get("track").isJsonObject()){
                        JsonObject track = items.get(i).getAsJsonObject().getAsJsonObject("track");
                        String trackName = track.get("name").getAsString();
                        StringBuffer artistName = new StringBuffer();
                        JsonArray artists = track.getAsJsonArray("artists");
                        for(int j = 0; j < artists.size(); j++){
                            if (j != 0){
                                artistName.append(", ");
                            }
                            String artist = artists.get(j).getAsJsonObject().get("name").getAsString();
                            artistName.append(artist);
                        }
                        System.out.println(trackName + " - " + artistName);
                    }
                }
            }
        }
    }
}
