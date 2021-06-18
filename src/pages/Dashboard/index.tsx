import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt='Github Explorer' />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder='Digite o nome do repositório' />
      <button type='submit'>Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/85137178?s=400&u=ed3e4733d55fafc4e98c4d7f0d342092d57cc177&v=4"
          alt="Alex Paris"
        />
        <div>
          <strong>rockeatseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/85137178?s=400&u=ed3e4733d55fafc4e98c4d7f0d342092d57cc177&v=4"
          alt="Alex Paris"
        />
        <div>
          <strong>rockeatseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/85137178?s=400&u=ed3e4733d55fafc4e98c4d7f0d342092d57cc177&v=4"
          alt="Alex Paris"
        />
        <div>
          <strong>rockeatseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
    </Repositories>
  </>
);

export default Dashboard;
