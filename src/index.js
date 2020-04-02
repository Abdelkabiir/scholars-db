
import {updateCollection, multipleUpdateCollection} from "./api";
import {CenturiesData} from "./utils/centuries-data";
import {CollectionNames} from "./constants";
import {SubCategoriesData} from "./utils/sub-categories-data";
import {Names} from "./utils/names-data";
import {Centuries} from './utils/centuries';
import {sortArray} from "./utils/sort";

/**
 * Uncomment the part of the code you want to use.
 */
// updateCollection(CollectionNames.SubCategoryDetails ,SubCategoriesData)
// console.log(Names.length);
/* 
Centuries.forEach(century => {
    sortArray(century.scholars);
})
multipleUpdateCollection(CollectionNames.Centuries, Centuries)
*/


