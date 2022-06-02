// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010102040303020003030302030303000100020202000000000000020403000001000200000001010202020200030000010002020001010000000000000000000000000000010000000202000303000003030002000100020202030003030000030304020000000200000300030300000301010303030303000003030304000000010000000000000000000002020000000100010104020202020200000200000000000101010202020202020202000001010101000000000000000000000000010101000000010101010104020202000000020201000101000000020000000200000000010001010000020202020202020400000100010000000000000000`, img`
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
. 2 . 2 2 2 . . . . . . 2 2 2 . 
. 2 . 2 . . . 2 2 2 2 2 2 . 2 . 
. 2 . 2 2 . 2 2 . . . . . . . . 
. . . . . . 2 . . . 2 2 . 2 2 . 
. 2 2 . 2 . 2 . 2 2 2 2 . 2 2 . 
. 2 2 2 2 . . . 2 . . 2 . 2 2 . 
. 2 2 2 2 2 2 2 2 . . 2 2 2 2 . 
. . 2 . . . . . . . . . . 2 2 . 
. . 2 . 2 2 2 2 2 2 2 2 . . 2 . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 . 2 2 . . . 2 . . . 
2 . . . . 2 . 2 2 . . 2 2 2 2 2 
2 2 2 . . 2 . 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.swamp.swampTile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
