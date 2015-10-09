//ビューアーを呼び出す
var viewer = new Cesium.Viewer('cesiumContainer');

//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

//ラインを追加
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([-75, 35,
                                                        -125, 35]),
        width : 5,
        material : Cesium.Color.RED
    }
});

//ポリゴンを追加
var Polygon = viewer.entities;

Polygon.add({
    name : 'Polygon',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0,
                                                        -100.0, 42.0,
                                                        -104.0, 40.0]),
        extrudedHeight: 500000.0,
	material : Cesium.Color.GREEN
    }
});

//地理院タイル読み込み
var viewer = new Cesium.Viewer('cesiumContainer', {
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker: false
});

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));

//ビューワーを読み込む
Cesium.BingMapsApi.defaultKey = "";
    var viewer = new Cesium.Viewer('cesiumContainer',{
      imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url : '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
        enablePickFeatures : false
      }),
      baseLayerPicker: false
    });
