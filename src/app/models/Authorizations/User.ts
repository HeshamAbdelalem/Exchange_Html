import { Person } from '../Supers/Person';
import { XObjectType } from '../Lookups/XObjectType';

import { UserRule } from '../Authorizations/UserRule';
import { UserDefaultTreasury } from '../Authorizations/UserDefaultTreasury';

export class User {

    // ID
    // اسم المستخدم
    // كلمة المرور
    // نوع الشخص
    // الشخص


	// needing for paging & sorting
	public RowsCount: number;
	public RowNo: number;
	public PageSize: number;
	public PageIndex: number;
	



    constructor() {

    }

}