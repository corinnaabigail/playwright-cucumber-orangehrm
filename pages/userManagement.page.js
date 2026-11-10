class UserManagementPage {
    constructor(page) {
        this.page = page;
        this.adminMenu = page.getByText('Admin', { exact: true });
        this.addButton = page.getByRole('button', { name: 'Add'});
        this.userRoleDropdown = page.locator('."oxd-select-text-input').first();
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');
        this.employeeNameOption = page.locator('.oxd-autocomplete-dropdown-option');
        this.statusDropdown = page.locator('.oxd-select-text-input').last();
        this.usernameAdminInput = page.locator('.oxd-input-group':has-text("Username" input));
    }

    async goToAdminPage() {
        await this.adminMenu.click();
    }

    async clickAdduser() {
        await this.addButton.click();
    }

    async selectUserRole(role) {
        await this.userRoleDropdown.click();
        await this.page.getByRole('option', { name: role}).click();
    }

    async selectEmployeeName(employeeName) {
        await this.employeeNameInput.fill(employeeName);
        await this.employeeNameOption.first.click();
    }

    async selectStatus(status) {
        await this.statusDropdown.click();
        await this.page.getByRole('option', { name: status}).click();
    }
}

module.exports = { UserManagementPage };
