import React from 'react';
import { User } from 'MyModels';

type Props = {
    user: User;
    backToSearch: () => void;
}

class UserCard extends React.Component<Props> {

    render() {
        return (
            <div style={{textAlign: 'left'}}>
                <button type="button" className="btn btn-link" onClick={this.props.backToSearch}>К результам поиска</button>
                <div className='p-2'>
                    <div><strong>ФИО: </strong>{this.props.user.fio}</div>
                    <div><strong>Город: </strong>{this.props.user.city}</div>
                    <div><strong>Возраст: </strong>{this.props.user.age}</div>
                    <div><strong>Паспорт: </strong>0800-02333</div>
                </div>
            </div>
        );
    }
}

export default UserCard;