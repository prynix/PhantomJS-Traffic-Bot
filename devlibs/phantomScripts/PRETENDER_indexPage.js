module.exports = function (self) {
      self.sendKeys('body', 'i', { modifiers: 'ctrl' });
      self.sendKeys('body', 'l', { modifiers: 'ctrl' });
      self.sendKeys('body', 'o', { modifiers: 'ctrl' });
      self.sendKeys('body', 'n', { modifiers: 'ctrl' });
      self.click('p');
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      //
      // ()=> Идём на внутренний раздел сайта через  @{header}:
      //   
      self.click(S.header + ' li:nth-child(' + getRandomInt(1, 5) + ') a');
}