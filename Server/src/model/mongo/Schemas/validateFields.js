/**
 * Validate whether the fields are matching between a mongoose schema and an object.
 * The validator will automatically ignore hidden paths starting with underscore(_).
 * You can include additional filters in the ignorelist as an array.
 * 
 * @param mongoose.Schema schema to verify against (call Model.schema to get schema)
 * @param Object object to verify
 * @param Array an array of fields to ignore
 * 
 * @returns an empty array if verified or list of missing fields if not 
 */
const validateFields = (schema, obj, ignore) => {
    const paths = Object.keys(schema.paths);
    const missing = []
    for (const path of paths) {
        const shouldIgnore = ignore.includes(path) || path.startsWith('_')
        if (!shouldIgnore) {
            if (!obj[path]) missing.push(path)
        }
    }
    return missing
}
/**
 * Update existing fields with matching fields in the new object.
 * Only fields that exist in the model will be updated
 * 
 * @param mongoose.Model mongoose model
 * @param obj object to copy into model
 * 
 * @returns the updated schema
 */
const updateFields = (model, obj) => {
    const paths = Object.keys(model.schema.paths);
    for (const path of paths) {
        if (obj[path]) model[path] = obj[path]
    }
    return model
}

module.exports = {
    validateFields,
    updateFields
}
