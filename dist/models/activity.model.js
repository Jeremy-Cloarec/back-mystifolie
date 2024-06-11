"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const assoc_client_activity_model_1 = require("./assoc_client_activity.model");
let Activity = class Activity extends sequelize_typescript_1.Model {
};
exports.Activity = Activity;
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => assoc_client_activity_model_1.AssocClientActivity),
    tslib_1.__metadata("design:type", Array)
], Activity.prototype, "assocClientActivities", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "id_activity", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    tslib_1.__metadata("design:type", String)
], Activity.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "min_personne", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "max_personne", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], Activity.prototype, "prix_par_personne", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    tslib_1.__metadata("design:type", String)
], Activity.prototype, "description", void 0);
exports.Activity = Activity = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Activity' })
], Activity);
//# sourceMappingURL=activity.model.js.map