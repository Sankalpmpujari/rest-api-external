pipeline {
    agent any

    stages {
        stage('Checkout Source Code') {
            steps {
                echo 'Retrieving source code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running REST API tests'
                bat 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the REST API application'
                bat 'npm run build'
            }
        }

        stage('Archive Generated Files') {
            steps {
                echo 'Archiving generated files'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'REST API pipeline completed successfully!'
        }
        failure {
            echo 'REST API pipeline failed. Check the Console Output.'
        }
    }
}
