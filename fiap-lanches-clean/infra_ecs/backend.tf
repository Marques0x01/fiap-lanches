terraform {
  backend "s3" {
    bucket         = "tfstates-fiap"
    key            = "fiap_lanches_app/terraform.tfstate"
    region         = "us-east-1"
    
  }
}
