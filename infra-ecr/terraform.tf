terraform {

  required_providers {
    tfe = {
      source = "hashicorp/tfe"
      version = "~> 0.52.0"
    }

    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.37.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.5.1"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0.4"
    }

    cloudinit = {
      source  = "hashicorp/cloudinit"
      version = "~> 2.3.2"
    }

    helm = {
      source = "hashicorp/helm"
      version = "2.12.1"
    }
  }

    required_version = ">= 1.3"
}
