const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { UserManagementPage } = require('../pages/userManagement.page');

When('I navigate to Admin User Management page', async function () {
    await this.userManagementPage = new UserManagementPage(this.page);
    await this.userManagementPage.goToAdminPage();
});

When('I click Add button', async function () {
    await this.userManagementPage.clickAdduser();
});

When('I fill user form with User Role {string} and Employee Name {string} and Status {string} and Username {string} and Password {string} and Confirm Password {string}', async function (role, employeeName, status, username, password, confirmPassword) {
    await this.userManagementPage.selectUserRole(role);
    await this.userManagementPage.employeeNameInput(employeeName);
    await this.userManagementPage.selectStatus(status);
}