build-project:
	cd my-portfolio && npm run build && cd ..

deploy-infra:
	cd terraform && terraform apply -auto-approve

deploy-site:
	cd my-portfolio && npm run build && aws s3 sync ./dist s3://jawad-portfolio-bucket77