module.exports = function (self) {
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      //
      // ()=> Идём на внутренний раздел сайта через  @{header}:
      //      
      self.click(S.header + ' li.navigation-list-item:nth-child(' + getRandomInt(1, 8) + ') a');
}