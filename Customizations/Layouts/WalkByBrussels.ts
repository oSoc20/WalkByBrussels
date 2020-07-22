import { Layout } from "../Layout";
import { DrinkingWater } from "../Layers/DrinkingWater";
import { NatureReserves } from "../Layers/NatureReserves";
import { Park } from "../Layers/Park";
import { Bench } from "../Layers/Bench";
import { Artwork } from "../Layers/Artwork";
import { Viewpoint } from "../Layers/Viewpoint";
import { ArtworkWBB } from "../Layers/ArtworkWBB";

export class WalkByBrussels extends Layout {
    constructor() {
        super("walkbybrussels",
            ["en","fr","nl"],
            "Drinking Water Spots",
            [new Park(), new NatureReserves(), new Viewpoint(), new Bench(), new DrinkingWater(), new ArtworkWBB()],
            10,
            50.8435,
            4.3688,


            "        <h3>Walk By Brussels</h3>\n" +
            "\n" +
            "<p>" +
            "Search for and add points of interest, look for new routes!"

            ,
            "  <p>Start by <a href=\"https://www.openstreetmap.org/user/new\" target=\"_blank\">creating an account\n" +
            "            </a> or by " +
            "            <span onclick=\"authOsm()\" class=\"activate-osm-authentication\">logging in</span>.</p>",
            "Start by clicking a pin and answering the questions");
    }

}