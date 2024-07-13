terraform {
  backend "s3" {
    bucket         = "backend-projeto"
    key            = "fiap_lanches_app/terraform.tfstate"
    region         = "us-east-2"
    
  }
}
