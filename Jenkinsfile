pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/conradorpg/automationWebDriverIOBS'
            }
        }
    stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
    stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1 npm run test'
            }
        }
    }
}