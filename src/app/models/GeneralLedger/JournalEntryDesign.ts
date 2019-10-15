import { DocumentType } from '../GeneralLedger/DocumentType';
import { JournalType } from '../GeneralLedger/JournalType';

import { JournalEntryFilter } from '../GeneralLedger/JournalEntryFilter';
import { JournalEntryLineDesign } from '../GeneralLedger/JournalEntryLineDesign';

export class JournalEntryDesign {

    // ID
    // نوع المستند
    // وصف القيد
    // نوع اليومية


	// needing for paging & sorting
	public RowsCount: number;
	public RowNo: number;
	public PageSize: number;
	public PageIndex: number;
	



    constructor() {

    }

}