function localtunnel {
  lt -s umfragewasischasd --port 8000
}
until localtunnel; do echo "localtunnel server crashed"
sleep 2
done
