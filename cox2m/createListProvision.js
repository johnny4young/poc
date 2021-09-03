import csv from 'csvtojson';

const listAllBitbrewTrackers = [
    {
        "brokers": [
            {
                "type": "Http"
            }
        ],
        "createdAt": "2020-07-09T14:58:32.338Z",
        "deviceId": "12345-virtual-device",
        "enabled": true,
        "tags": [
            {
                "color": "#eb984e",
                "id": "ec16e139-d58c-4391-ba68-c21422600320",
                "name": "virtual-device"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003451412",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-18T11:35:39.171Z",
        "deviceId": "9041604141",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003443716",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-18T11:35:39.171Z",
        "deviceId": "9041602371",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003469836",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-18T11:35:39.171Z",
        "deviceId": "9041703483",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003444458",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041602445",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003461742",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041702174",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003472095",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041704209",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003461106",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041702110",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003457336",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041701233",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003458920",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041701392",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003468390",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041703339",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003468929",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041703392",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003464274",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041702427",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003471105",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041704110",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003470800",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041704080",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003513252",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041904325",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003450679",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041604067",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003466568",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041703156",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003469380",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041703438",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169003462989",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-07-20T12:33:32.835Z",
        "deviceId": "9041702298",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725122",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886008",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880340",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985012",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247184",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880175",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886043",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312375",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886033",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247127",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886005",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880126",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886016",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400080",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885004",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880217",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885019",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247085",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886037",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247119",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886019",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247002",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885052",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400072",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885003",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400015",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102785003",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880233",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886030",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247234",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986012",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880332",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986011",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312219",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885047",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880159",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885007",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312318",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885022",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400049",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886004",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312391",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886022",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725155",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885029",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002306070",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0071886018",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312268",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885025",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312227",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885014",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880324",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985013",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247135",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886038",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725205",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985026",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880142",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985015",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312334",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885012",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400163",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885028",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247036",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986013",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001246756",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102785002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880225",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885006",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400064",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247010",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885045",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400155",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886007",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725106",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102787003",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247143",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886035",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247051",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885030",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312367",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885041",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880282",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985016",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880290",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885023",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880191",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886018",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247044",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985014",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247069",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886012",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312235",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986014",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400056",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886003",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247150",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885024",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880258",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886020",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312201",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886051",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312193",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885049",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880209",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102887004",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880274",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885035",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725130",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885009",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880100",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886050",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880266",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886040",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400031",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102786002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880316",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886006",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247259",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985022",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247093",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886017",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400098",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880357",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102985001",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312417",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885020",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880118",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885048",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247200",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885021",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725114",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885010",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312342",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886036",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400106",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886010",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312284",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102885026",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880134",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986015",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312383",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102986010",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725148",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2020-11-26T20:45:45.201Z",
        "deviceId": "0102886009",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001246830",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.427Z",
        "deviceId": "0011186080",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001211776",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.427Z",
        "deviceId": "0050786056",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312029",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.427Z",
        "deviceId": "0022686149",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247697",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.427Z",
        "deviceId": "0011387059",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880506",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985038",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880860",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986164",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312805",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987099",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880373",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987029",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247689",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0011386042",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313076",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985147",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313043",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985143",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247614",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986153",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880712",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987100",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880530",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986037",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880902",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986149",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313019",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985138",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400262",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0110986021",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312896",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986160",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400577",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0110987042",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312102",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102886048",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000881025",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987086",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880837",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986159",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247747",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986155",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880845",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987102",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880662",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987001",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312821",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987097",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880746",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986151",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313092",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102986140",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725361",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0110986020",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312623",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985037",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247861",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985142",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313100",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985136",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001246848",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0032087007",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400692",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0110985015",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000879888",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0011386235",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001720354",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "9111987090",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880415",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987032",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725767",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0110286073",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002242044",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0050686146",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000881017",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985135",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880928",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102985146",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247762",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987108",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247853",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0102987093",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001246822",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.428Z",
        "deviceId": "0061985188",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312359",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102885027",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400668",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0110387013",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312771",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985008",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313126",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986132",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880779",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986162",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312292",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102886013",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247846",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987090",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880431",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987020",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247598",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986150",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247531",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986017",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880423",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985046",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247457",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985035",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247754",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985171",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247333",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987023",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247770",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986138",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880001",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102885043",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001250881",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0091786001",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312532",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985029",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725676",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985051",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312516",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986045",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001720628",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0081286003",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312607",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987011",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880803",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985166",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880027",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102885062",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880944",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986146",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247903",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985132",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247671",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987107",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312730",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986019",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002313134",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986127",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400585",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0071385176",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880910",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987092",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312524",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987022",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880894",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986136",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725163",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986026",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247416",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987010",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312300",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102885017",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312839",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986152",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001246897",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102886041",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001400684",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0110286078",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312698",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985031",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725171",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985027",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000880936",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985150",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247812",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102985144",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001247655",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987106",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000879839",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102487004",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169001725759",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102987034",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169002312854",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "0102986148",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "configurationFolderName": "01104B03",
                "imei": "015169000879946",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-01-28T14:42:35.429Z",
        "deviceId": "9111485059",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884060",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287084",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883179",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287020",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315667",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285076",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883880",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286105",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884086",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287078",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315253",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286044",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883872",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285104",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315063",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315055",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285065",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883088",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884037",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287085",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883716",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883161",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285021",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883492",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883906",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287110",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250147",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286019",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883757",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285057",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883211",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285010",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884045",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285077",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883831",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315352",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285046",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883401",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285066",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883625",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287051",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314991",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287067",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880092",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0102886047",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315030",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287073",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315246",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287114",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883708",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286048",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883617",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285115",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315360",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287052",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883583",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883310",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285060",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883070",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0103086128",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883252",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246913",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0102886031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883260",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285051",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883153",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287021",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315659",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285075",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315436",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287058",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315469",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0103085005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315113",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883690",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286047",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315097",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315006",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285064",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883591",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285012",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314926",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286060",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883922",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286115",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883427",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287071",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314884",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315170",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285016",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315238",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287111",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315048",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286067",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315022",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285067",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884029",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0081285016",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883534",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286018",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883336",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285063",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315303",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287050",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883963",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285114",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883120",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883898",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286109",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883377",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286068",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315394",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286057",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315378",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883344",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285062",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883286",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285052",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250063",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287022",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315550",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285113",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315329",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285048",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315311",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285045",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883781",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287059",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883740",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285059",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883567",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285011",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883856",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286107",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884003",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286110",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883724",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286046",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250188",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883484",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315014",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884052",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287087",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315543",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285117",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315451",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883385",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315295",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286052",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883526",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285015",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315089",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0103086060",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250154",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287029",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250204",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286010",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246905",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0102885042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315154",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287018",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883468",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883799",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285053",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883674",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285041",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883203",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315287",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285044",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883096",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883393",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286066",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883682",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287053",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883195",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286023",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883765",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285055",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883609",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286117",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250071",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883369",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285068",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883559",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315584",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285112",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250121",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883146",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883245",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286059",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250089",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286045",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883948",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285118",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315691",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287086",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315386",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285058",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315162",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287013",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250139",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285032",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883666",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285047",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315402",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315196",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110286016",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314959",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110285061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883518",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287017",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250196",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.781Z",
        "deviceId": "0110287024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315626",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285111",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883997",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286111",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883542",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287016",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883294",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287068",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883302",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315337",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287046",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315477",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286100",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315535",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286116",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883435",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286065",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883823",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287057",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883112",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286033",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315618",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285108",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883641",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286119",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883732",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287045",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883773",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287063",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883989",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287109",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315485",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286108",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315071",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883849",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287069",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315683",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287077",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315493",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285103",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883971",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285110",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883328",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286064",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883229",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287010",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883138",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884078",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285081",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250097",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287047",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883658",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287055",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883955",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287112",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315410",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883419",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287072",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314934",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315568",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287113",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315428",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286053",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883815",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286050",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315147",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287019",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250212",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315675",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286082",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315261",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286120",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314983",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287066",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883450",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315444",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883930",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286118",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315188",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286013",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883864",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286103",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883476",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315600",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286114",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315204",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287011",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314900",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287065",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883914",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285106",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883443",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883237",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286058",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315220",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314918",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287060",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883187",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286035",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883351",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286069",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250170",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286017",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250162",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287036",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884011",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286180",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883500",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286012",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315519",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287107",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315642",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287075",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250105",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315592",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286112",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315501",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286106",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883104",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286032",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314892",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287064",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883575",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287012",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250113",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315345",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286043",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315634",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285178",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314975",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287070",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315121",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315212",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286011",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000883633",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285116",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315576",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286113",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250220",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315279",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287115",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002314942",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110286062",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315527",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110285107",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315139",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T21:59:44.782Z",
        "deviceId": "0110287006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247432",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985036",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247648",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985155",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312979",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986168",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312938",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987111",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880985",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986137",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247366",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986052",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312110",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885033",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246798",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050685083",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312961",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986157",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002242085",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786038",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879987",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886057",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312664",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879938",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0061986073",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725213",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247564",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986023",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880977",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986142",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312185",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247440",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247481",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986029",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725288",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001720552",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0042986129",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246855",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102486001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312904",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0011386214",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247895",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986130",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312995",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985162",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880621",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985020",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880399",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312086",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879979",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880886",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987087",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246962",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880381",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987026",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312581",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247622",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987096",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247788",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986134",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247499",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986028",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312656",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985032",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246871",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9111885077",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002242101",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050685173",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880597",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001400122",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886027",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246731",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0022585166",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880555",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001101381",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9093086002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312672",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985028",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880068",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886011",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247374",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312094",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247523",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985021",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880688",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987101",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725221",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880738",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985158",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000858478",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0061985122",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880407",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985050",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246988",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885055",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246749",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0022686083",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001087408",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9092086004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247424",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985039",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880811",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0010986099",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880696",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986156",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247663",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986163",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879961",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0022685076",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880969",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986141",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880589",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000768958",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0031387025",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247465",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247291",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986048",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246996",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885051",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001211800",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880878",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985169",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312151",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885039",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247309",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987021",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247549",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312797",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985154",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880829",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986167",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312060",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110685093",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880019",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879656",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102485006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002313001",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985140",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247341",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880548",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247713",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985172",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879896",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0022786217",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880365",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986044",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312847",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987095",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246889",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886059",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002242051",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050685188",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725270",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247473",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247317",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987025",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246806",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110887155",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000613477",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110886170",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880993",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986135",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002306245",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0072086071",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001627880",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110786204",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312649",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986033",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002311989",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0011386247",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247283",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985053",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312789",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986022",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312045",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0043087013",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246723",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0011385211",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247556",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312722",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986032",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001720578",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0072186002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246863",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0032485135",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725197",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986025",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880472",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886025",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002313068",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986144",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880613",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312557",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986038",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879862",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110787014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312003",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0022886158",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002313118",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985137",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880514",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986036",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000811444",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786015",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247390",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725247",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312441",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985019",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001211834",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050686174",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879995",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886039",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001585856",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9092085002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725239",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312037",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9092587049",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879912",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0043087014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312920",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985164",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000811428",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050686179",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880654",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880670",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985153",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312326",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880852",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986166",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247804",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985149",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880084",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885058",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880480",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247796",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985145",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725262",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880605",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312169",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312953",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987105",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312490",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880449",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987013",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246814",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102485001",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247358",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985041",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247507",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985030",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000811436",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001641436",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9112087113",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312573",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985055",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247267",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985048",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880704",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987098",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880761",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985163",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002242069",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786048",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247580",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247739",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986158",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312862",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985156",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247820",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986147",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880647",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312714",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985033",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247408",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986035",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880522",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987012",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880787",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0011385224",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312466",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986046",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247721",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987110",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247382",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987028",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880639",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986020",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880753",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985167",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247606",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985160",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312987",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986165",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000824173",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050686045",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247705",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987103",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001245675",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0081185024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312706",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879920",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0032085018",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000811451",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050786014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880498",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879870",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0071086239",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000879904",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0011887076",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312763",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247572",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985023",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247515",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985034",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247887",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986133",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312631",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985040",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001132584",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9110886085",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312565",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987030",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000811469",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0050685164",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880464",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986053",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002311997",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0032485091",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312508",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986050",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312680",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725254",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0110587006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312755",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880720",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986154",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001153499",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9120486017",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880076",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102886054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002311971",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "9120286063",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312813",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985159",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312888",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985168",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001247630",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102985157",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001725189",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102987002",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880563",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986027",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312078",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102885060",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002312474",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-03-09T22:01:22.682Z",
        "deviceId": "0102986042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317028",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-06-18T15:51:51.01Z",
        "deviceId": "0110287124",
        "enabled": true,
        "tags": [
            {
                "color": "#5dade2",
                "id": "a25bc00e-a0d0-4716-9ca7-dd95d5f53791",
                "name": "staging/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317119",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110286133",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317507",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386005",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317366",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386096",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317549",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386106",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885075",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386029",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885752",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110385091",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885133",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386022",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000812087",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0050686061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317572",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386107",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250402",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110286123",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250287",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387027",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317523",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387093",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316830",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387020",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317556",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110386108",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885125",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387019",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316848",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387029",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250246",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T21:01:33.817Z",
        "deviceId": "0110387018",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317531",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0050585147",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885299",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110287121",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885604",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0050686056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885026",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0103086029",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885349",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110285133",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885372",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110287133",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317374",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110385004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884987",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110285142",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317408",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0050685102",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317283",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110385067",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317291",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110385069",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885141",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110386030",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317671",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110385054",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317457",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110385063",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316814",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110386009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250360",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110386031",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250345",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110386037",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885034",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110387011",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317614",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-03T22:47:26.446Z",
        "deviceId": "0110386119",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885059",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-04T16:50:55.828Z",
        "deviceId": "0110387012",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317499",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-05T15:23:00.777Z",
        "deviceId": "0110387007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885745",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110386116",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250386",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110387035",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316970",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110386035",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885331",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110285132",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885489",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0072085182",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317150",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110286131",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317317",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110385068",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316996",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-06T22:04:25.067Z",
        "deviceId": "0110285121",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885067",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-09T21:32:26.5Z",
        "deviceId": "0110387039",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250238",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-09T21:32:26.5Z",
        "deviceId": "0110385006",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250352",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-09T21:32:26.5Z",
        "deviceId": "0110385008",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317655",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-08-09T21:32:26.5Z",
        "deviceId": "0110386113",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317424",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0022887076",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001246939",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0102885061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885216",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285119",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885232",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285120",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250428",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285124",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317069",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285126",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317242",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285128",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317135",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285130",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317176",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285139",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885208",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286122",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885190",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286124",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317077",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286126",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885356",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286129",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317101",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287120",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317259",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287123",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317168",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287127",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885323",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287128",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885794",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385056",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317309",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385059",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885513",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385061",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885778",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385086",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885588",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317432",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386004",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250295",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386010",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316889",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386014",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250329",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386017",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885182",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386026",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316947",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386028",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885380",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386033",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885406",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386036",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317622",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386079",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317630",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386083",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885547",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386087",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885521",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386088",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885687",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386109",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885505",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885646",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387009",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316871",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387022",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885117",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387028",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317127",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387032",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885257",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387043",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317697",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387090",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885679",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387094",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885455",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387095",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317325",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387096",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317440",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "9092886050",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317333",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0050586155",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885554",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0081185042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000880035",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0102886058",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250410",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285122",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885281",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285125",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317143",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110285131",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316988",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286121",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317093",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286125",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885265",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286127",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885240",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286130",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885364",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286132",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317234",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286140",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885000",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110286142",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317002",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287116",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885422",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287117",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317200",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287119",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885430",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287126",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317184",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287131",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885398",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110287142",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885539",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385003",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317192",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385007",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317606",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385057",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885570",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385062",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317416",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385064",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885448",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385066",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885786",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110385085",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885091",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386015",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250303",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885802",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386084",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317382",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386091",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885661",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386092",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317358",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386093",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317689",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110386099",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316863",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387010",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250311",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387021",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316905",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387024",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885109",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387026",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316962",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387030",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169001250394",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387036",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317218",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387042",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000885224",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387044",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002317010",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-01T19:10:06.632Z",
        "deviceId": "0110387045",
        "enabled": true,
        "tags": [
            {
                "color": "#58d68d",
                "id": "b9cad64c-98b8-4223-b615-e95e36e99be8",
                "name": "dealers/mjauto"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316293",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287168",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316194",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287161",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316004",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287083",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884110",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287091",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315774",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287098",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884193",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287100",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316715",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287137",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884870",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287144",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884516",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287149",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315709",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287079",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884771",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286151",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884763",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286148",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316707",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286136",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316756",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286146",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316731",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286134",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315998",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286084",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884722",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285174",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316418",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285166",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316632",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285150",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884912",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285136",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884292",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285070",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316285",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110387016",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884698",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110387002",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316251",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110386013",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884649",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287158",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884888",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287146",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316566",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287143",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316475",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287138",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884482",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287105",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884169",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287099",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884367",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287095",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884441",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110287094",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316343",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286176",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884821",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286169",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316368",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286165",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316392",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286162",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884144",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286102",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884425",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286087",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884375",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286085",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315717",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110286083",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884706",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285167",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884565",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285163",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884896",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285148",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884797",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285147",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884862",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285040",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316053",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285085",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884490",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285095",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002315964",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285096",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169002316111",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285097",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    },
    {
        "brokers": [
            {
                "type": "DanlawUdp"
            },
            {
                "imei": "015169000884185",
                "type": "DanlawTcp"
            }
        ],
        "createdAt": "2021-09-02T15:02:53.331Z",
        "deviceId": "0110285100",
        "enabled": true,
        "tags": [
            {
                "color": "#ec7063",
                "id": "cf17820e-11ce-4dce-8a0a-213714f1d4cb",
                "name": "dealers/vpkrs"
            }
        ],
        "tracing": "disabled"
    }
]

async function main() {
  const dataTrackers = await csv()
    .fromFile( './trackersToProvision.csv' )

  console.log(dataTrackers[0]);

  const listTrackersMJauto = listAllBitbrewTrackers.filter( tracker => {
    return tracker.tags.find(item => item.name === 'dealers/vpkrs')
  }).map(item => item.deviceId);
  console.log(listTrackersMJauto.length)
  listTrackersMJauto.forEach(item => console.log(item))
  
  const dataTrackersFiltered = dataTrackers.filter( tracker => !listTrackersMJauto.find(item => item === tracker.trackerId))
  console.log(dataTrackersFiltered.length)
  console.log('---------')
  dataTrackersFiltered.forEach(item => console.log(item.trackerId))
  console.log('---------')
  const data = await csv()
    .fromFile( './DL970_1900 OBD_12.29.20.csv' )

  data.forEach( async (item) => {
    const body = {
      "trackerId": item.SerialNum.trim(),
      "imei":item.IMEI.trim()
    }   
    try {
      const found = dataTrackersFiltered.find(tracker => {
        return tracker.trackerId.trim() == body.trackerId
      })
      
      if( found ) {
        console.log(`${body.trackerId},${body.imei}`);
      }
    } catch (error) {
      console.log(error.message)
    }     
  })

}


await main()