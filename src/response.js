const { model } = require("./models/user")

module.exports = {

    singleResponse: (model, status) => {
        return {
            status,
            model
        }
    },

    pagedResponse: (model, status) => {
        return {
            didError: false,
            error: null,
            status,
            model: model
        }
    },

    errorResponse: (message, status) => {
        return {
            status,
            message
        }
    }

}

