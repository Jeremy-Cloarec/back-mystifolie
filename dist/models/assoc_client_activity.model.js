"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssocClientActivity = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const activity_model_1 = require("./activity.model");
const user_model_1 = require("./user.model");
let AssocClientActivity = class AssocClientActivity extends sequelize_typescript_1.Model {
};
exports.AssocClientActivity = AssocClientActivity;
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], AssocClientActivity.prototype, "id_user", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => activity_model_1.Activity),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], AssocClientActivity.prototype, "id_activity", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], AssocClientActivity.prototype, "nombre_participants", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    tslib_1.__metadata("design:type", Date)
], AssocClientActivity.prototype, "date_reservation", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", user_model_1.User)
], AssocClientActivity.prototype, "user", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => activity_model_1.Activity),
    tslib_1.__metadata("design:type", activity_model_1.Activity)
], AssocClientActivity.prototype, "activity", void 0);
exports.AssocClientActivity = AssocClientActivity = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'assoc_client_activity' })
], AssocClientActivity);
//# sourceMappingURL=assoc_client_activity.model.js.map