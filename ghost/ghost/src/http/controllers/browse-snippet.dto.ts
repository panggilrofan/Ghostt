import ObjectID from 'bson-objectid';
import {Snippet} from '../../core/snippets/snippet.entity';

export class BrowseSnippetDTO {
    id: ObjectID;
    name: string;
    lexical?: string|null;
    mobiledoc?: string|null;
    created_at: Date;
    updated_at: Date|null;

    constructor(data: Snippet, options: {formats?: 'mobiledoc'|'lexical'}) {
        this.id = data.id;
        this.name = data.name;

        if (options.formats === 'lexical') {
            this.lexical = data.lexical;
        } else {
            this.mobiledoc = data.mobiledoc;
        }

        this.created_at = data.createdAt;
        this.updated_at = data.updatedAt;
    }
}