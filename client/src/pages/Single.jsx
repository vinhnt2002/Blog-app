import React from 'react'
import Menu from '../components/Menu'
import IMG from '../img/img3.jpg'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src={IMG} alt="" />
          <div className="info">
            <span>Vinh</span>
            <span>posted 2 day ago</span>
          </div>

          <div className="edit">
            <Link className='link icon-edit' to={`/write?edit=2`}>
              <AiOutlineEdit />
            </Link>
            <RiDeleteBin6Line className='icon-delete' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minus. Modi dicta ipsam alias harum!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi possimus repudiandae tempora excepturi! Unde atque dolorum illum pariatur quae perspiciatis,
          fugit iste nostrum sint temporibus, aliquid numquam nemo modi deleniti exercitationem. Accusantium eos nesciunt optio temporibus impedit minima aperiam alias a
          praesentium sapiente adipisci, accusamus illo, illum iste tenetur nam earum ducimus! Earum, ab? Non iste maiores asperiores facere illum, laboriosam earum placeat!
          Soluta id itaque vitae iste. Ex blanditiis minus repudiandae eos eum maxime maiores sed! Fugit quidem asperiores consequuntur sequi praesentium? Distinctio nemo assumenda nihil tempore mollitia
          esse deleniti eligendi voluptatum, dolor quis fugiat aspernatur? Harum, fugiat eum?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi possimus repudiandae tempora excepturi! Unde atque dolorum illum pariatur quae perspiciatis,
          fugit iste nostrum sint temporibus, aliquid numquam nemo modi deleniti exercitationem. Accusantium eos nesciunt optio temporibus impedit minima aperiam alias a
          praesentium sapiente adipisci, accusamus illo, illum iste tenetur nam earum ducimus! Earum, ab? Non iste maiores asperiores facere illum, laboriosam earum placeat!
          Soluta id itaque vitae iste. Ex blanditiis minus repudiandae eos eum maxime maiores sed! Fugit quidem asperiores consequuntur sequi praesentium? Distinctio nemo assumenda nihil tempore mollitia
          esse deleniti eligendi voluptatum, dolor quis fugiat aspernatur? Harum, fugiat eum?
        </p>
      </div>
      <Menu />

    </div>
  )
}

export default Single