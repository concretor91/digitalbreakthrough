import React from 'react';
import { User } from 'MyModels';

type Props = {
    user: User;
    click: () => void;
}

class SearchResult extends React.Component<Props> {    
    render() {
        const user = this.props.user;
        return (
            <div
             style={{cursor:'pointer', borderBottom: '1px solid #dfe1e5', textAlign:'left'}}
              className='p-2'
              onClick={this.props.click}>
                  <div>{user.fio}</div>
                  <div className="text-muted">{user.city}</div>
                  <div></div>
              </div>
        )
    }
}

export default SearchResult;