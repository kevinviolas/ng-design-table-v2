/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
export var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
})(CellsComponentList || (CellsComponentList = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbHNDb21wb25lbnRSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs2REFLNkQ7QUFFN0QsTUFBTSxDQUFOLElBQVksa0JBaUJYO0FBakJELFdBQVksa0JBQWtCO0lBQzVCLGdEQUEwQixDQUFBO0lBQzFCLHlEQUFtQyxDQUFBO0lBQ25DLGtEQUE0QixDQUFBO0lBQzVCLDJDQUFxQixDQUFBO0lBQ3JCLHVDQUFpQixDQUFBO0lBQ2pCLGdEQUEwQixDQUFBO0lBQzFCLGdEQUEwQixDQUFBO0lBQzFCLDRDQUFzQixDQUFBO0lBQ3RCLDhDQUF3QixDQUFBO0lBQ3hCLDZDQUF1QixDQUFBO0lBQ3ZCLDhDQUF3QixDQUFBO0lBQ3hCLG9EQUE4QixDQUFBO0lBQzlCLGdEQUEwQixDQUFBO0lBQzFCLDRDQUFzQixDQUFBO0lBQ3RCLGdEQUEwQixDQUFBO0lBQzFCLDBDQUFvQixDQUFBO0FBQ3RCLENBQUMsRUFqQlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWlCN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqKiAgQHByb2plY3QgTVNfTm93Ym9hcmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxuICoqICBAZmlsZSBDb21wb25lbnRSZWdpc3RyeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcbiAqKiAgQGF1dGhvciBCcmljZSBEYXVwaWFyZCA8YnJpY2UuZGF1cGlhcmRAc21hcnRpaXouY29tPiAgKipcbiAqKiAgQERhdGUgMTIvMDMvMjAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGVudW0gQ2VsbHNDb21wb25lbnRMaXN0IHtcbiAgQnV0dG9uTGluayA9IFwiYnV0dG9uLWxpbmtcIixcbiAgQnV0dG9uTGlua1RleHQgPSBcImJ1dHRvbi1saW5rLXRleHRcIixcbiAgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbi1jbGlja1wiLFxuICBQcmlvcml0eSA9IFwicHJpb3JpdHlcIixcbiAgT3JpZ2luID0gXCJvcmlnaW5cIixcbiAgTmFtZUF2YXRhciA9IFwibmFtZS1hdmF0YXJcIixcbiAgRGF0ZUZvcm1hdCA9IFwiZGF0ZS1mb3JtYXRcIixcbiAgQ291bnRSb3cgPSBcImNvdW50LXJvd1wiLFxuICBHZW5kZXIgPSAnZ2VuZGVyLWF2YXRhcicsXG4gIFBob25lID0gJ3Bob25lLWRpc3BsYXknLFxuICBZZXNObyA9ICd5ZXMtbm8tZGlzcGxheScsXG4gIEN1c3RvbWVyUmFuayA9ICdjdXN0b21lci1yYW5rJyxcbiAgSXRDYXRlZ29yeSA9ICdpdC1jYXRlZ29yeScsXG4gIEl0U3RhdHVzID0gJ2l0LXN0YXR1cycsXG4gIEN1c3RvbUljb24gPSAnY3VzdG9tLWljb24nLFxuICBQbmdJY29uID0gJ3BuZy1pY29uJ1xufVxuIl19