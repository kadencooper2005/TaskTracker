# backend/rate_limit.py

from slowapi import Limiter
from slowapi.util import get_remote_address

# You can also pass storage_uri here if using Redis
limiter = Limiter(key_func=get_remote_address, storage_uri="redis://redis:6379")
 