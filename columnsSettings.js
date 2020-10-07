columnsSettings = [
    {
        data: "api_slotitem_id"
    },
    {
        data: "api_slotitem_id",
        "orderable": false,
        render: function (data) { return db.find((v) => v.wpId === data.toString()).typeName }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).wpName }
    },
    { data: "api_level" },
    {
        data: null,
        render: function (data) { return "" }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).iconId }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).fire }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).torpedo }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).aa }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).armor }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).asw }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).evasion }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).los }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).accuracy }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).bombing }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).range }
    },
    {
        data: "api_slotitem_id",
        render: function (data) { return db.find((v) => v.wpId === data.toString()).radius }
    },
];