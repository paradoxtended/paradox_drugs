import Config from '@static/config.json';
import { requestModel, Point } from '@overextended/ox_lib/client';

async function CreateShop(coords: number[], model: string, anim: string = "WORLD_HUMAN_AA_COFFEE") {
    if (!IsModelValid(model))
        console.error("Invalid ped's model: ", model, " required 'string', recieved ", typeof model);

    let ped: number;
    const point = new Point({
        coords: coords,
        distance: 50
    });

    point.onEnter = async () => {
        await requestModel(model);
        ped = CreatePed(4, model, coords[0], coords[1], coords[2] - 1.0, coords[3], false, false);
        FreezeEntityPosition(ped, true);
        SetBlockingOfNonTemporaryEvents(ped, true);
        TaskStartScenarioInPlace(ped, anim, 0, true);

        exports.ox_target.addLocalEntity(ped, {
            label: "YOOO"
        })
    }

    point.onExit = () => {
        DeleteEntity(ped);
        SetModelAsNoLongerNeeded(model);
        ped = null;
    }
}

if (Config.Shop) {
    Config.Shop.Locations.map(loc => {
        const model = typeof Config.Shop.Model === 'string'
            ? Config.Shop.Model
            : Config.Shop.Model[Math.floor(Math.random() * Config.Shop.Model.length)];

        CreateShop(loc.Coords, model, loc.Scenario);
    })
}