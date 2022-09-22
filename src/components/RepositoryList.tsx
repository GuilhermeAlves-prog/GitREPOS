import { useState, useEffect } from "react";
import axios from "axios";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import React from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
const [repositories, setRepositories] = useState<Repository[]>([])

useEffect(() => {
  axios.get("https://api.github.com/users/GuilhermeAlves-prog/repos")
      .then(response => setRepositories(response.data))
},[])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </section>
  );
}