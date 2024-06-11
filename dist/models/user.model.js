"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const assoc_client_activity_model_1 = require("./assoc_client_activity.model");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => assoc_client_activity_model_1.AssocClientActivity),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "assocClientActivities", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id_user", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    tslib_1.__metadata("design:type", String)
], User.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    tslib_1.__metadata("design:type", String)
], User.prototype, "mdp", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    tslib_1.__metadata("design:type", String)
], User.prototype, "mail", void 0);
exports.User = User = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'User' })
], User);
//# sourceMappingURL=user.model.js.map