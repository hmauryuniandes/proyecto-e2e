const { Given, When, Then } = require('@cucumber/cucumber');
const pass = 'input[name="password"]';
const identification = 'input[name="identification"]';
const assert = require('assert');
let slug;
let urlpost;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$(identification);
    return await element.setValue(email);
});


When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$(pass);
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});

When('I click additional', async function() {
    let element = await this.driver.$('div[class="gh-nav-bottom"]');
    return await element.click();
});

When('I click sign out', async function () {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

When('I click tag', async function () {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I click new tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
}); 

When('I click save', async function () {
    let element = await this.driver.$('span=Save');
    return await element.click();
}); 

When('I enter name tag {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[name="name"]');
    return await element.setValue(tag);
});

Then('I validate title tag {kraken-string}', async function (tag) {
    let element = await this.driver.$('h2.gh-canvas-title');
    let text = await element.getText();
    return assert.equal(text, `Tags\n${tag}` );
});

When('I get text value slug', async function () {
    let eleslug = await this.driver.$('input[name="slug"]');
    this.slug = await eleslug.getValue();
    return this.slug;
});

When('I click tag list', async function () {
    let element = await this.driver.$(`a[href="#/tags/${this.slug}/"]`);
    return await element.click();
});

When('I click delete tag', async function () {
    let element = await this.driver.$('span=Delete tag');
    return await element.click();
});

When('I click confirm delete', async function () {
    let element = await this.driver.$('span=Delete');
    return await element.click();
});

Then('I search tag', async function () {
    try {
        let element = await this.driver.$(`a[href="#/tags/${this.slug}/"]`);
    } catch (error) {
        return error;
    }
});

When('I click post', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click new post', async function () {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
}); 

When('I enter name post {kraken-string}', async function (post) {
    let element = await this.driver.$('textarea[placeholder="Post Title"]');
    return await element.setValue(post);
});

When('I enter content post {kraken-string}', async function (contpost) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.click();
    return await element.setValue(contpost);
});

Then('I search post {kraken-string}', async function (post) {
    try {
        let element = await this.driver.$(`h3=${post}`);
        return await element.click();
    } catch (error) {
        return error;
    }
});

When('I click settings post', async function () {
    let element = await this.driver.$('button[title="Settings"]');
    return await element.click();
}); 

When('I assing tag to post {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[type="Search"]');
    await element.click();
    let eletag = await this.driver.$(`li=${tag}`);
    return await eletag.click();
}); 

When('I close settings post', async function () {
    let element = await this.driver.$('button[aria-label="Close"]');
    return await element.click();
});

When('I click update post', async function () {
    try {
        let element = await this.driver.$('span=Udate');
        return await element.click();
    } catch (error) {
        let element = await this.driver.$('span=Publish');
        return await element.click();
    }
}); 


When('I click confirm update post', async function () {
    try {
        let element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    } catch (error) {
        element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    }
}); 

Then('I validate post publication', async function () {
    try {
        let element = await this.driver.$('span=Published');
        return assert.equal("Publish", element.getText());
    } catch (error) {
        return error;
    }
});

When('I click page', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I click new page', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
}); 

When('I enter name page {kraken-string}', async function (page) {
    let element = await this.driver.$('textarea[placeholder="Page Title"]');
    return await element.setValue(page);
});

When('I enter content page {kraken-string}', async function (contpage) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.click();
    return await element.setValue(contpage);
});

Then('I search page {kraken-string}', async function (page) {
    try {
        let element = await this.driver.$(`h3=${page}`);
        return await element.click();
    } catch (error) {
        return error;
    }
});

When('I click settings page', async function () {
    let element = await this.driver.$('button[title="Settings"]');
    return await element.click();
}); 

When('I assing tag to page {kraken-string}', async function (tag) {
    let element = await this.driver.$('input[type="Search"]');
    await element.click();
    let eletag = await this.driver.$(`li=${tag}`);
    return await eletag.click();
}); 

When('I close settings page', async function () {
    let element = await this.driver.$('button[aria-label="Close"]');
    return await element.click();
});

When('I click update page', async function () {
    try {
        let element = await this.driver.$('span=Udate');
        return await element.click();
    } catch (error) {
        let element = await this.driver.$('span=Publish');
        return await element.click();
    }
}); 


When('I click confirm update page', async function () {
    try {
        let element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    } catch (error) {
        element = await this.driver.$("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']");
        return await element.click();
    }
}); 

Then('I validate page publication', async function () {
    try {
        let element = await this.driver.$('span=Published');
        return assert.equal("Publish", element.getText());
    } catch (error) {
        return error;
    }
});


Then('I validate login error message', async function () {
    let element = await this.driver.$('p.main-error');
    return assert.notEqual(element, undefined)
});

Then('I validate login success', async function () {
    let element = await this.driver.$('.gh-nav-menu-details-blog');
    return assert.notEqual(element, undefined)
});

When('I expand profile options', async function () {
    let element = await this.driver.$('.gh-nav-bottom > div.pointer');
    return await element.click();
});

When('I click on logout', async function () {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

Then('I am redirected to login page', async function () {
    let url = await this.driver.getUrl();
    return assert.equal(url.includes('/ghost/#/signin'), true)
});

When('I expand publish post', async function () {
    let element = await this.driver.$('div.gh-publishmenu-trigger');
    return await element.click();
});

When('I click publish post', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    return await element.click();
});

Then('I validate post was published', async function () {
    let element = await this.driver.$('div.gh-publishmenu-trigger');
    return assert.equal((await element.getText()).trim(), "Update");
});

When('I expand setting post', async function () {
    let element = await this.driver.$('button.post-settings');
    return await element.click();
});

When('I scroll to buttom', async function () {
    let element = await this.driver.$('.settings-menu-content');
    return await element.scrollIntoView({ block: "end" });
});

When('I click delete post', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    return await element.click();
});

When('I click to confirm delete post', async function () {
    let element = await this.driver.$('.modal-content > .modal-footer > button.gh-btn-red');
    return await element.click();
});

Then('I am redirected to posts list', async function () {
    let url = await this.driver.getUrl();
    return assert.equal(url.includes('ghost/#/posts'), true)
});

Then('I search post {kraken-string} in the list', async function (post) {
    let index = await this.driver.$$('.posts-list li > a > h3')
        .findIndex(async x => (await x.getText()).trim() == post)
    assert.notEqual(index, -1);
    let elementLinks = await this.driver.$$(`.posts-list li > a`);
    return await elementLinks[index].click();
});

When('I click general', async function () {
    let element = await this.driver.$("section.gh-nav-body").$('a[href="#/settings/general/"]');
    return await element.click();
});

When('I click expand title and description', async function () {
    let element = await this.driver.$$('.gh-setting-first > .gh-setting-action > button')[0];
    return await element.click();
});

When('I type title {kraken-string}', async function (title) {
    let element = await this.driver.$(".ember-text-field.gh-input.ember-view");
    return await element.setValue(title);
});

When('I type description {kraken-string}', async function (description) {
    let element = await this.driver.$$(".ember-text-field.gh-input.ember-view")[1];
    return await element.setValue(description);
});

When('I user save settings', async function () {
    let element = await this.driver.$(".gh-canvas-header > .view-actions > button");
    return await element.click();
});

Then('I title was updated', async function () {
    try {
        let element = await this.driver.$(".gh-nav-menu-details-blog");
        return assert.equal("Nuevo Título", element.getText());
    } catch (error) {
        return error;
    }
});

When('And I user click on upload image', async function () {
    let element = await this.driver.$('.gh-setting-first > .gh-setting-action > div > span > input[type="file"]').selectFile('/fixtures/kraken-icon.png', { force: true });
    return await element.click();
});

When('I click next', async function() {
    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
});

When('I Navigate to pages', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I create a new page',async function(){
    await this.driver.$('a[href="#/editor/page/"]').click()
})

When('I write a title', async function(){
    let title = await this.driver.$('textarea[placeholder="Page Title"]');
    await title.setValue("Nueva Pagina");
})

When('I write a message', async function(){
    let element = await this.driver.$('div.koenig-editor__editor p');
  await this.driver.execute((el, text) => {
    el.innerHTML = text;
  }, element, "Esta es mi primera pagina");
})

When('I publish the page', async function(){
    await this.driver.$('div.gh-publishmenu-trigger').click();
    await this.driver.$('button.gh-publishmenu-button').click();
})

Then('I confim if the page is published', async function(){
    /*let element = await this.driver.$('div.flex > span > div');
    return assert.equal("Published", element.getText());*/
})

When('I click on first page', async function(){
    await this.driver.$$('a[title="Edit this page"]')[0].click();
    
})

When('I modify the title', async function(){
    await this.driver.$('textarea[placeholder="Page Title"]').setValue(" Modificada");
})

When('I press update button', async function(){
    await this.driver.$('div.gh-publishmenu-trigger').click();
    
})

When('I confirm update', async function(){
    await this.driver.$('button.gh-publishmenu-button').click();
})

Then('I validate the update', async function(){
   /* let element = await this.driver.$(' aside > article > .gh-notification-content > .gh-notification-title');
    return assert.equal("Updated", element.getText());*/
})

When('I click on settings', async function(){
    await this.driver.$('button.post-settings').click();
})

When('I scroll to buttom', async function () {
    let element = await this.driver.$('.settings-menu-content');
    return await element.scrollIntoView({ block: "end" });
});

When('I click delete button', async function(){
    await this.driver.$('button.settings-menu-delete-button').click();
})

When('I confirm I want to delete', async function(){
    await this.driver.$('button.gh-btn-red').click();
})

Then('I validate the delete', async function(){
    
})

When('I navigate to config', async function() {
    let element = await this.driver.$('a[href="#/settings/design/"]');
    return await element.click();
});

When('I write the primary menu name', async function() {
    let name = await this.driver.$$('input[placeholder="Label"]')[0];
    await name.setValue("Nueva Pagina");
});

When('I write the path to the primary menu', async function() {
    let path = await this.driver.$$('span.gh-blognav-url > input.ember-text-field')[0];
    await path.setValue("nueva-pagina");
});

When('I click on plus', async function() {
    let element = await this.driver.$$('button.gh-blognav-add')[0];
    return await element.click();
});

When('I primary menu save changes', async function() {
    let element = await this.driver.$('button.gh-btn-blue');
    return await element.click();
});

Then('I check changes were saved', async function(){
    
})


When('I write the second menu name', async function() {
    let name = await this.driver.$$('input[placeholder="Label"]');
    await name[name.length-1].setValue("Nueva Pagina");
});

When('I write the path to the second menu', async function() {
    let path = await this.driver.$$('span.gh-blognav-url > input.ember-text-field');
    await path[path.length-1].setValue("nueva-pagina");
});

When('I click on last plus', async function() {
    let element = await this.driver.$$('button.gh-blognav-add');
    return await element[element.length-1].click();
});