const TechServiceEngineerQuiz = {
    questions: [
      {
        // --------------- multiple answers questions ---------------
        type: "multiple",
        question: "What does the first octet of an IP address typically represent?",
        options: [
          "The specific device within a network",
          "The type or class of the network",
          "The department or office network",
          "The subnet mask value"
        ],
        correctAnswer: "The type or class of the network"
      },
      {
        type: "multiple",
        question: "In the IP address 192.168.68.104, what does the third octet (68) likely represent?",
        options: [
          "The private network",
          "The subnet within the private network",
          "The department or office network",
          "The unique device within the network"
        ],
        correctAnswer: "The department or office network"
      },
      {
        type: "multiple",
        question: "Which part of the IP address identifies the specific device within a subnetwork?",
        options: [
          "First octet",
          "Second octet",
          "Third octet",
          "Fourth octet"
        ],
        correctAnswer: "Fourth octet"
      },
      {
        type: "multiple",
        question: "What is the range of values each octet in an IPv4 address can have?",
        options: [
          "0 to 1024",
          "1 to 254",
          "0 to 255",
          "1 to 256"
        ],
        correctAnswer: "0 to 255"
      },
      {
        type: "multiple",
        question: "With a subnet mask of 255.255.255.0, what do the first three octets of an IP address represent?",
        options: [
          "The specific device within the network",
          "The subnetwork and device combined",
          "The network portion of the IP address",
          "The broadcast address"
        ],
        correctAnswer: "The network portion of the IP address"
      },
      {
        type: "multiple",
        question: "What happens if the subnet mask changes to 255.255.0.0?",
        options: [
          "The first two octets represent the network, and the last two represent the host.",
          "The entire address becomes the network portion.",
          "The fourth octet represents the subnetwork.",
          "The IP address becomes invalid."
        ],
        correctAnswer: "The first two octets represent the network, and the last two represent the host."
      },
      {
        type: "multiple",
        question: "What does the second octet in 192.168.1.1 help identify?",
        options: [
          "The unique device within the network",
          "The network's type (public or private)",
          "A specific subnetwork within the private network",
          "The broadcast address for the network"
        ],
        correctAnswer: "A specific subnetwork within the private network"
      },
      {
        type: "multiple",
        question: "Which part of the IP address 192.168.1.0 indicates the network type?",
        options: [
          "192",
          "168",
          "1",
          "0"
        ],
        correctAnswer: "192"
      },
      {
        type: "multiple",
        question: "In binary, what does 00000000 represent in decimal?",
        options: [
          "0",
          "128",
          "255",
          "1"
        ],
        correctAnswer: "0"
      },
      {
        type: "multiple",
        question: "What is the purpose of having 32 bits in an IPv4 address?",
        options: [
          "To allow more precise subnetting",
          "To define both network and host parts of an IP address",
          "To make binary-to-decimal conversion simpler",
          "To increase the maximum addressable hosts in a single network"
        ],
        correctAnswer: "To define both network and host parts of an IP address"
      },
      {
        type: "multiple",
        question: "How many octets does an IPv4 address contain?",
        options: [
          "2 octets",
          "3 octets",
          "4 octets",
          "5 octets"
        ],
        correctAnswer: "4 octets"
      },
      {
        type: "multiple",
        question: "What is the total number of bits in an IPv4 address?",
        options: [
          "16 bits",
          "32 bits",
          "64 bits",
          "128 bits"
        ],
        correctAnswer: "32 bits"
      },
      {
        type: "multiple",
        question: "How many bits are in a single octet of an IPv4 address?",
        options: [
          "4 bits",
          "8 bits",
          "16 bits",
          "32 bits"
        ],
        correctAnswer: "8 bits"
      },
      {
        type: "multiple",
        question: "What does the network portion of an IP address identify?",
        options: [
          "The device's unique identifier",
          "The network the device belongs to",
          "The subnet mask of the device",
          "The broadcast address of the network"
        ],
        correctAnswer: "The network the device belongs to"
      },
      {
        type: "multiple",
        question: "What does the host portion of an IP address identify?",
        options: [
          "The specific device within the network",
          "The type of IP address (static or dynamic)",
          "The subnet mask used",
          "The network's broadcast address"
        ],
        correctAnswer: "The specific device within the network"
      },
      {
        type: "multiple",
        question: "If the subnet mask is 255.255.255.0, how many devices can exist in the network?",
        options: [
          "256 devices",
          "254 devices",
          "128 devices",
          "512 devices"
        ],
        correctAnswer: "254 devices"
      },
      {
        type: "multiple",
        question: "Why are there only 254 usable IP addresses in a /24 subnet?",
        options: [
          "Two IPs are reserved for DHCP",
          "Two IPs are reserved for broadcast and network addresses",
          "Two IPs are reserved for subnetting",
          "The last octet can only hold up to 254"
        ],
        correctAnswer: "Two IPs are reserved for broadcast and network addresses"
      },
      {
        type: "multiple",
        question: "What is the host portion in the IP address 192.168.1.1 with a subnet mask of 255.255.255.0?",
        options: [
          "192",
          "192.168",
          ".1",
          "1.1"
        ],
        correctAnswer: ".1"
      },
      {
        type: "multiple",
        question: "What happens to the number of available hosts as the subnet mask gets longer (e.g., from /24 to /25)?",
        options: [
          "The number of available hosts increases",
          "The number of available hosts decreases",
          "The number of available hosts stays the same",
          "The subnet mask doesn't affect the number of hosts"
        ],
        correctAnswer: "The number of available hosts decreases"
      },
      {
        type: "multiple",
        question: "In a subnet mask of 255.255.0.0, how many octets are used for the network portion?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctAnswer: "2"
      },
      {
        type: "multiple",
        question: "Why might a device have an IP address like 192.168.100.10 instead of 192.168.1.10?",
        options: [
          "It belongs to a different VLAN or subnet",
          "It uses a longer subnet mask",
          "It is assigned a public IP",
          "It has a reserved IP in DHCP"
        ],
        correctAnswer: "It belongs to a different VLAN or subnet"
      },
      {
        type: "multiple",
        question: "What does a DHCP server do?",
        options: [
          "Manages and assigns IP addresses dynamically",
          "Configures subnet masks for devices",
          "Defines the broadcast address",
          "Assigns public IPs to private networks"
        ],
        correctAnswer: "Manages and assigns IP addresses dynamically"
      },
      {
        type: "multiple",
        question: "What is the purpose of a subnet mask?",
        options: [
          "It defines the broadcast address of the network",
          "It determines the division between the network and host portions of an IP",
          "It assigns unique IPs to devices within a network",
          "It creates VLANs for the network"
        ],
        correctAnswer: "It determines the division between the network and host portions of an IP"
      },
      {
        type: "multiple",
        question: "What does CIDR notation specify?",
        options: [
          "IP addresses and their associated network masks",
          "The default gateway of a network",
          "The broadcast address of a network",
          "The maximum number of devices in a subnet"
        ],
        correctAnswer: "IP addresses and their associated network masks"
      },
      {
        type: "multiple",
        question: "What does the /24 in CIDR notation represent?",
        options: [
          "24 bits are used for the network portion",
          "24 bits are used for the host portion",
          "There are 24 usable IP addresses in the network",
          "It is a default route for all IPs"
        ],
        correctAnswer: "24 bits are used for the network portion"
      },
      {
        type: "multiple",
        question: "How many usable IP addresses are available in a /24 subnet?",
        options: [
          "256",
          "254",
          "512",
          "65,536"
        ],
        correctAnswer: "254"
      },
      {
        type: "multiple",
        question: "Which CIDR prefix is commonly used for small networks?",
        options: [
          "/24",
          "/16",
          "/8",
          "/32"
        ],
        correctAnswer: "/24"
      },
      {
        type: "multiple",
        question: "How many bits are used for the host portion in a /16 subnet?",
        options: [
          "8 bits",
          "16 bits",
          "24 bits",
          "32 bits"
        ],
        correctAnswer: "16 bits"
      },
      {
        type: "multiple",
        question: "What is the primary use of /32 in CIDR notation?",
        options: [
          "To define a single device in routing or firewall rules",
          "To specify the default gateway for a network",
          "To allocate IP addresses for small networks",
          "To represent an entire address space"
        ],
        correctAnswer: "To define a single device in routing or firewall rules"
      },
      {
        type: "multiple",
        question: "How many usable IP addresses are available in a /8 subnet?",
        options: [
          "256",
          "65,536",
          "16,777,214",
          "4,294,967,296"
        ],
        correctAnswer: "16,777,214"
      },
      {
        type: "multiple",
        question: "What does /0 in CIDR notation represent?",
        options: [
          "The entire IPv4 address space",
          "A single IP address",
          "A medium-sized network",
          "The broadcast address of a network"
        ],
        correctAnswer: "The entire IPv4 address space"
      },
      {
        type: "multiple",
        question: "Why is CIDR more efficient than class-based IP allocation?",
        options: [
          "It allows flexible and scalable allocation of IP ranges",
          "It eliminates the need for subnet masks",
          "It provides a default gateway for all networks",
          "It increases the total number of available IPs"
        ],
        correctAnswer: "It allows flexible and scalable allocation of IP ranges"
      },
      {
        type: "multiple",
        question: "What is the primary purpose of CIDR in networking?",
        options: [
          "To define IP address ranges and manage networks efficiently",
          "To assign default gateways to devices",
          "To determine broadcast addresses in subnets",
          "To specify VLANs in large networks"
        ],
        correctAnswer: "To define IP address ranges and manage networks efficiently"
      },
      {
        type: "multiple",
        question: "What does a subnet mask of 255.255.255.0 mean in binary?",
        options: [
          "11111111.11111111.11111111.00000000",
          "11111111.11111111.11111110.00000000",
          "11111111.11111111.00000000.11111111",
          "11111111.11111111.11111111.11111111"
        ],
        correctAnswer: "11111111.11111111.11111111.00000000"
      },
      {
        type: "multiple",
        question: "How many hosts are available in a subnet with a mask of 255.255.255.0?",
        options: [
          "256",
          "254",
          "128",
          "126"
        ],
        correctAnswer: "254"
      },
      {
        type: "multiple",
        question: "What does a subnet mask of 255.255.255.128 divide the network into?",
        options: [
          "2 networks with 128 hosts each",
          "2 networks with 126 hosts each",
          "4 networks with 64 hosts each",
          "1 network with 254 hosts"
        ],
        correctAnswer: "2 networks with 126 hosts each"
      },
      {
        type: "multiple",
        question: "How is the subnet mask 255.255.255.128 represented in CIDR notation?",
        options: [
          "/24",
          "/25",
          "/26",
          "/27"
        ],
        correctAnswer: "/25"
      },
      {
        type: "multiple",
        question: "Why can't 11111111.11111111.11111111.00000011 be a valid subnet mask?",
        options: [
          "It contains non-binary digits",
          "It doesn’t have continuous 1's followed by 0's",
          "It exceeds the length of 32 bits",
          "It doesn’t support host portions"
        ],
        correctAnswer: "It doesn’t have continuous 1's followed by 0's"
      },
      {
        type: "multiple",
        question: "How many decimals are used in a /25 subnet mask?",
        options: [
          "24",
          "25",
          "26",
          "27"
        ],
        correctAnswer: "25"
      },
      {
        type: "multiple",
        question: "What is the total number of networks created when using 255.255.255.128?",
        options: [
          "1",
          "2",
          "4",
          "8"
        ],
        correctAnswer: "2"
      },
      {
        type: "multiple",
        question: "What part of the subnet mask determines the network portion?",
        options: [
          "Continuous 0's",
          "Continuous 1's",
          "The last octet",
          "The host portion"
        ],
        correctAnswer: "Continuous 1's"
      },
      {
        type: "multiple",
        question: "What is the significance of the host portion in a subnet mask?",
        options: [
          "It identifies the specific device within the network",
          "It determines the network size",
          "It specifies the broadcast address",
          "It defines the total number of networks"
        ],
        correctAnswer: "It identifies the specific device within the network"
      },
      {
        type: "multiple",
        question: "What happens when you divide a network with a /24 mask into /25 subnets?",
        options: [
          "It creates 4 subnets with 64 hosts each",
          "It creates 2 subnets with 128 hosts each",
          "It creates 2 subnets with 126 hosts each",
          "It creates 8 subnets with 32 hosts each"
        ],
        correctAnswer: "It creates 2 subnets with 126 hosts each"
      },
      {
        type: "multiple",
        question: "How many possible CIDR notations are there for an IPv4 network?",
        options: [
          "32 possible CIDR notations",
          "26 possible CIDR notations",
          "128 possible CIDR notations",
          "64 possible CIDR notations"
        ],
        correctAnswer: "26 possible CIDR notations"
      },
      {
        type: "multiple",
        question: "What is the primary purpose of DHCP in a network?",
        options: [
          "To manually assign static IP addresses to devices",
          "To automate the assignment of IP addresses and network settings",
          "To control access to the network via IP addresses",
          "To ensure devices have a permanent IP address"
        ],
        correctAnswer: "To automate the assignment of IP addresses and network settings"
      },
      {
        type: "multiple",
        question: "What is an IP lease in DHCP?",
        options: [
          "The permanent assignment of an IP address to a device",
          "The temporary assignment of an IP address to a device for a specific period",
          "The process of reserving an IP address for a device",
          "The configuration of IP addresses within the DHCP scope"
        ],
        correctAnswer: "The temporary assignment of an IP address to a device for a specific period"
      },
      {
        type: "multiple",
        question: "What happens when an IP lease expires in a DHCP-configured network?",
        options: [
          "The device keeps using the IP address indefinitely",
          "The IP address is returned to the DHCP pool and may be reassigned",
          "The device must renew the IP lease but cannot request a new address",
          "The device will automatically reconnect to the network"
        ],
        correctAnswer: "The IP address is returned to the DHCP pool and may be reassigned"
      },
      {
        type: "multiple",
        question: "Which of the following is typically excluded from dynamic IP assignment within a DHCP scope?",
        options: [
          "Gateway addresses",
          "IP reservations for certain devices",
          "Broadcast addresses",
          "Subnet masks"
        ],
        correctAnswer: "IP reservations for certain devices"
      },
      {
        type: "multiple",
        question: "In a DHCP scope, which of the following is included along with the assigned IP addresses?",
        options: [
          "Only the default gateway",
          "Subnet mask, gateway, and DNS servers",
          "Only the subnet mask",
          "Only the DNS server address"
        ],
        correctAnswer: "Subnet mask, gateway, and DNS servers"
      },
      {
        type: "multiple",
        question: "What does IP reservation in DHCP ensure?",
        options: [
          "The IP address will be dynamically assigned to the device from the DHCP pool",
          "The IP address is permanently assigned to the device without renewal",
          "The device receives the same IP address each time it connects based on its MAC address",
          "The device will not require any network configuration from DHCP"
        ],
        correctAnswer: "The device receives the same IP address each time it connects based on its MAC address"
      },
      {
        type: "multiple",
        question: "What type of device is commonly associated with IP reservation in a DHCP network?",
        options: [
          "Web browsers",
          "Printers and servers",
          "Wi-Fi routers",
          "IP cameras"
        ],
        correctAnswer: "Printers and servers"
      },
      {
        type: "multiple",
        question: "What does a MAC address uniquely identify?",
        options: [
          "The device's IP address",
          "The network router",
          "The physical network interface on a device",
          "The software installed on the device"
        ],
        correctAnswer: "The physical network interface on a device"
      },      
      {
        type: "multiple",
        question: "What is a MAC address constructed from? (Example: a4:c3:f0:85:ac:2d)",
        options: [
          "The device's unique serial number and network protocol",
          "The first six characters represent the company and the last six represent a unique number",
          "The IP address and subnet mask of the device",
          "The operating system version and device model"
        ],
        correctAnswer: "The first six characters represent the company and the last six represent a unique number"
      },
      {
        type: "multiple",
        question: "What is port 20 used for?",
        options: [
          "FTP command control",
          "FTP data transfer",
          "Web browsing",
          "Email sending"
        ],
        correctAnswer: "FTP data transfer"
      },
      {
        type: "multiple",
        question: "What is port 21 used for?",
        options: [
          "FTP command control",
          "FTP data transfer",
          "Email sending",
          "File sharing"
        ],
        correctAnswer: "FTP command control"
      },
      {
        type: "multiple",
        question: "What is port 22 used for?",
        options: [
          "Secure web browsing",
          "SSH (Secure Shell)",
          "Email retrieval",
          "File transfer"
        ],
        correctAnswer: "SSH (Secure Shell)"
      },
      {
        type: "multiple",
        question: "What is port 23 used for?",
        options: [
          "FTP data transfer",
          "Telnet (Remote access)",
          "SMTP email sending",
          "DNS queries"
        ],
        correctAnswer: "Telnet (Remote access)"
      },
      {
        type: "multiple",
        question: "What is port 25 used for?",
        options: [
          "SMTP (Email sending)",
          "FTP data transfer",
          "Web browsing",
          "DNS queries"
        ],
        correctAnswer: "SMTP (Email sending)"
      },
      {
        type: "multiple",
        question: "What is port 53 used for?",
        options: [
          "Web browsing",
          "DNS queries and responses",
          "Email retrieval",
          "FTP data transfer"
        ],
        correctAnswer: "DNS queries and responses"
      },
      {
        type: "multiple",
        question: "What is port 80 used for?",
        options: [
          "HTTPS web browsing",
          "FTP data transfer",
          "SMTP email sending",
          "HTTP web browsing"
        ],
        correctAnswer: "HTTP web browsing"
      },
      {
        type: "multiple",
        question: "What is port 110 used for?",
        options: [
          "IMAP email management",
          "POP3 email retrieval",
          "FTP data transfer",
          "SMTP email sending"
        ],
        correctAnswer: "POP3 email retrieval"
      },
      {
        type: "multiple",
        question: "What is port 143 used for?",
        options: [
          "SMTP email sending",
          "IMAP email management",
          "DNS queries",
          "HTTP web browsing"
        ],
        correctAnswer: "IMAP email management"
      },
      {
        type: "multiple",
        question: "What is port 161 used for?",
        options: [
          "Web browsing",
          "Email retrieval",
          "SNMP (Network management)",
          "FTP data transfer"
        ],
        correctAnswer: "SNMP (Network management)"
      },
      {
        type: "multiple",
        question: "What is port 443 used for?",
        options: [
          "Secure web browsing (HTTPS)",
          "FTP data transfer",
          "Email retrieval",
          "Unsecure communication"
        ],
        correctAnswer: "Secure web browsing (HTTPS)"
      },    
      {
        type: "multiple",
        question: "What is TCP (Transmission Control Protocol) used for?",
        options: [
          "Fast communication with no reliability",
          "Reliable, connection-oriented communication",
          "Error reporting in IP networks",
          "Assigning IP addresses to devices"
        ],
        correctAnswer: "Reliable, connection-oriented communication"
      },
      {
        type: "multiple",
        question: "What is UDP (User Datagram Protocol) known for?",
        options: [
          "Reliable communication",
          "Connectionless, fast, but unreliable communication",
          "Error reporting in IP networks",
          "Assigning IP addresses to devices"
        ],
        correctAnswer: "Connectionless, fast, but unreliable communication"
      },
      {
        type: "multiple",
        question: "What is the primary purpose of ICMP (Internet Control Message Protocol)?",
        options: [
          "Data packet delivery",
          "Diagnostic and error reporting in IP networks",
          "Assigning IP addresses to devices",
          "Secure data transmission"
        ],
        correctAnswer: "Diagnostic and error reporting in IP networks"
      },
      {
        type: "multiple",
        question: "What does DHCP (Dynamic Host Configuration Protocol) do?",
        options: [
          "Automatically assigns IP addresses to devices",
          "Provides secure communication over IP networks",
          "Synchronizes network time",
          "Monitors network devices"
        ],
        correctAnswer: "Automatically assigns IP addresses to devices"
      },
      {
        type: "multiple",
        question: "What is RDP (Remote Desktop Protocol) used for?",
        options: [
          "Remote access and control of a computer",
          "Real-time streaming",
          "Error reporting",
          "Synchronizing network time"
        ],
        correctAnswer: "Remote access and control of a computer"
      },
      {
        type: "multiple",
        question: "What is SNMP (Simple Network Management Protocol) used for?",
        options: [
          "Managing and monitoring network devices",
          "Automatically assigning IP addresses to devices",
          "Securing data transmission over the internet",
          "Real-time streaming"
        ],
        correctAnswer: "Managing and monitoring network devices"
      },
      {
        type: "multiple",
        question: "What is the main function of NTP (Network Time Protocol)?",
        options: [
          "Providing secure communication",
          "Clock synchronization between devices",
          "Assigning IP addresses to devices",
          "Managing network devices"
        ],
        correctAnswer: "Clock synchronization between devices"
      },
      {
        type: "multiple",
        question: "What does IPsec (Internet Protocol Security) provide?",
        options: [
          "Secure communication and data integrity",
          "Error reporting in IP networks",
          "Automatic IP address assignment",
          "Remote access to devices"
        ],
        correctAnswer: "Secure communication and data integrity"
      },
      {
        type: "multiple",
        question: "What is the function of ARP (Address Resolution Protocol)?",
        options: [
          "Resolving IP addresses to MAC addresses",
          "Managing network devices",
          "Synchronizing network time",
          "Assigning IP addresses to devices"
        ],
        correctAnswer: "Resolving IP addresses to MAC addresses and vice versa."
      },
      {
        type: "multiple",
        question: "What is the first message sent in a TCP Three-Way Handshake?",
        options: [
          "SYN",
          "SYN/ACK",
          "ACK",
          "FIN"
        ],
        correctAnswer: "SYN"
      },
      {
        type: "multiple",
        question: "What does the SYN/ACK message in the Three-Way Handshake do?",
        options: [
          "Acknowledges the request to establish a connection and synchronizes sequence numbers",
          "Ends the connection gracefully",
          "Resets the connection",
          "Sends the actual data"
        ],
        correctAnswer: "Acknowledges the request to establish a connection and synchronizes sequence numbers"
      },
      {
        type: "multiple",
        question: "What is the purpose of the ACK message in the Three-Way Handshake?",
        options: [
          "To acknowledge the synchronization of sequence numbers and confirm connection establishment",
          "To end the connection",
          "To send data",
          "To reset the connection"
        ],
        correctAnswer: "To acknowledge the synchronization of sequence numbers and confirm connection establishment"
      },
      {
        type: "multiple",
        question: "Which message is sent to indicate that a device wants to terminate the connection in TCP?",
        options: [
          "SYN",
          "FIN",
          "RST",
          "ACK"
        ],
        correctAnswer: "FIN"
      },
      {
        type: "multiple",
        question: "What does the RST message in TCP do?",
        options: [
          "Indicates that there is an error or resets the connection",
          "Synchronizes sequence numbers",
          "Acknowledges the connection request",
          "Indicates the end of data transmission"
        ],
        correctAnswer: "Indicates that there is an error or resets the connection"
      },
      {
        type: "multiple",
        question: "How are the data packets in TCP reconstructed?",
        options: [
          "By using sequence numbers that increment by 1",
          "By using random keys",
          "By timestamping the packets",
          "By using packet IDs"
        ],
        correctAnswer: "By using sequence numbers that increment by 1"
      },
      {
        type: "multiple",
        question: "In the TCP Three-Way Handshake, what happens after the SYN message is sent?",
        options: [
          "The device waits for the SYN/ACK message",
          "The device immediately sends data",
          "The connection is closed",
          "The connection is reset"
        ],
        correctAnswer: "The device waits for the SYN/ACK message"
      },
      {
        type: "multiple",
        question: "Which symbol in a web browser indicates that a secure TLS connection is active?",
        options: [
          "Keylock symbol",
          "Padlock icon",
          "Red warning icon",
          "Cloud symbol"
        ],
        correctAnswer: "Keylock symbol"
      },
      {
        type: "multiple",
        question: "What does TLS offer over SSL?",
        options: [
          "Enhanced security",
          "Faster browsing speed",
          "More compatibility with older browsers",
          "Better video streaming quality"
        ],
        correctAnswer: "Enhanced security"
      },     
      {
        type: "multiple",
        question: "What is the first step in the DHCP process when a device joins a network?",
        options: [
          "DHCP Offer",
          "DHCP Acknowledgment",
          "DHCP Discovery",
          "DHCP Request"
        ],
        correctAnswer: "DHCP Discovery"
      },
      {
        type: "multiple",
        question: "What information does a DHCP Offer include?",
        options: [
          "The device’s IP address and network settings",
          "The device’s hardware address",
          "A confirmation message from the DHCP server",
          "A DNS server address only"
        ],
        correctAnswer: "The device’s IP address and network settings"
      },
      {
        type: "multiple",
        question: "How does a client respond after receiving multiple DHCP offers?",
        options: [
          "By sending a DHCP Acknowledgment",
          "By accepting the first offer it receives",
          "By choosing one offer and sending a DHCP Request",
          "By sending a DHCP Discovery message again"
        ],
        correctAnswer: "By choosing one offer and sending a DHCP Request"
      },
      {
        type: "multiple",
        question: "What is the purpose of the DHCP Acknowledgment message?",
        options: [
          "To assign the IP address permanently",
          "To confirm the lease of the IP address to the client",
          "To renew the IP address lease",
          "To broadcast the DHCP discovery message"
        ],
        correctAnswer: "To confirm the lease of the IP address to the client"
      },
      {
        type: "multiple",
        question: "What does the IP address lease duration specify?",
        options: [
          "How long the DHCP server will store the client's IP address",
          "How long the client can use the assigned IP address",
          "How long the DHCP request remains valid",
          "How long the DHCP server will be active"
        ],
        correctAnswer: "How long the client can use the assigned IP address"
      },
      {
        type: "multiple",
        question: "What happens when the DHCP lease duration is about to expire?",
        options: [
          "The client must request a new IP address from the server",
          "The client sends a DHCP Request to renew the lease",
          "The server assigns a new IP address to the client",
          "The client disconnects from the network"
        ],
        correctAnswer: "The client sends a DHCP Request to renew the lease"
      },
      {
        type: "multiple",
        question: "What is the role of a DHCP server in the network?",
        options: [
          "To provide a unique IP address to each device",
          "To assign a fixed IP address to devices",
          "To provide Internet access",
          "To secure the network from unauthorized access"
        ],
        correctAnswer: "To provide a unique IP address to each device"
      },
      {
        type: "multiple",
        question: "What happens during DHCP Discovery?",
        options: [
          "The DHCP server sends an acknowledgment message to the client",
          "The client broadcasts a message to find a DHCP server",
          "The client configures its IP address manually",
          "The DHCP server assigns an IP address to the client"
        ],
        correctAnswer: "The client broadcasts a message to find a DHCP server"
      },
      {
        type: "multiple",
        question: "What is the primary difference between an IPS (Intrusion Prevention System) and an IDS (Intrusion Detection System)?",
        options: [
          "IPS prevents attacks, while IDS only detects them",
          "IDS prevents attacks, while IPS only detects them",
          "IPS is used for network performance monitoring, and IDS is used for data encryption",
          "There is no difference; they perform the same function"
        ],
        correctAnswer: "IPS prevents attacks, while IDS only detects them"
      },    
      {
        type: "multiple",
        question: "What is the primary difference between the Internet and an Intranet?",
        options: [
          "The Internet is a public network, while an Intranet is a private network",
          "An Intranet can be accessed by anyone, while the Internet is restricted",
          "The Internet is slower than an Intranet",
          "An Intranet has more information sources than the Internet"
        ],
        correctAnswer: "The Internet is a public network, while an Intranet is a private network"
      },
      {
        type: "multiple",
        question: "How many bits make up one byte?",
        options: [
          "8 bits",
          "16 bits",
          "4 bits",
          "32 bits"
        ],
        correctAnswer: "8 bits"
      },
      {
        type: "multiple",
        question: "Which of the following is true about RAM?",
        options: [
          "RAM is non-volatile and retains data permanently",
          "RAM is volatile and does not retain data permanently",
          "RAM is used for permanent data storage",
          "RAM stores the operating system only"
        ],
        correctAnswer: "RAM is volatile and does not retain data permanently"
      },
      {
        type: "multiple",
        question: "What is the primary difference between RAM and ROM?",
        options: [
          "RAM is volatile; ROM is non-volatile",
          "RAM is read-only; ROM is random-access",
          "RAM is used to store permanent files; ROM is used for temporary files",
          "RAM is used only in computers; ROM is used in all devices"
        ],
        correctAnswer: "RAM is volatile; ROM is non-volatile"
      },
      {
        type: "multiple",
        question: "In the domain www.example.com, what does 'www' represent?",
        options: [
          "The sub-domain prefix for the world wide web",
          "The domain name",
          "The top-level domain",
          "The country code"
        ],
        correctAnswer: "The sub-domain prefix for the world wide web"
      },
      {
        type: "multiple",
        question: "What is the Internet of Things (IoT)?",
        options: [
          "A term for connected physical devices that collect and share data over the internet",
          "A new social media platform",
          "A network of devices that only communicate within a local area",
          "A method for encrypting data over the internet"
        ],
        correctAnswer: "A term for connected physical devices that collect and share data over the internet"
      },
      {
        type: "multiple",
        question: "What does the search engine Shodan do?",
        options: [
          "Searches for exposed devices connected to the internet",
          "Indexes websites based on content",
          "Provides the fastest search engine results",
          "Blocks malicious IP addresses"
        ],
        correctAnswer: "Searches for exposed devices connected to the internet"
      },
      {
        type: "multiple",
        question: "What is a false positive in cybersecurity?",
        options: [
          "When a security system wrongly identifies a harmless event as malicious",
          "When a security system detects a real threat as harmless",
          "When a security system fails to detect any event",
          "When an intruder is incorrectly identified as a legitimate user"
        ],
        correctAnswer: "When a security system wrongly identifies a harmless event as malicious"
      },
      {
        type: "multiple",
        question: "Which of the following is more acceptable in cybersecurity: false positive or false negative?",
        options: [
          "False positive",
          "False negative",
          "Both are equally dangerous",
          "Neither is acceptable"
        ],
        correctAnswer: "False positive"
      },
      {
        type: "multiple",
        question: "What is the function of a whitelist in cybersecurity?",
        options: [
          "It allows only approved items or entities to pass through",
          "It blocks specific known threats or undesired items",
          "It encrypts data for secure transmission",
          "It monitors network traffic"
        ],
        correctAnswer: "It allows only approved items or entities to pass through"
      },
      {
        type: "multiple",
        question: "What is the main purpose of a cookie on a website?",
        options: [
          "To store user preferences and login credentials",
          "To track website traffic",
          "To encrypt sensitive data",
          "To speed up website loading times"
        ],
        correctAnswer: "To store user preferences and login credentials"
      },
      {
        type: "multiple",
        question: "What is the function of cache on a device?",
        options: [
          "To store frequently accessed data for faster retrieval",
          "To monitor and filter network traffic",
          "To back up user data",
          "To encrypt sensitive files"
        ],
        correctAnswer: "To store frequently accessed data for faster retrieval"
      },  
        {
          type: "multiple",
            question: "What is the primary motivation of black hat hackers?",
          options: [
            "To gain unauthorized access to systems for personal gain or to commit cybercrimes",
            "To improve system security by identifying vulnerabilities",
            "To create and distribute computer viruses",
            "To protect users from cyberattacks"
          ],
          correctAnswer: "To gain unauthorized access to systems for personal gain or to commit cybercrimes"
        },
        {
          type: "multiple",
            question: "What distinguishes white hat hackers from black hat hackers?",
          options: [
            "White hat hackers use their skills to improve security with permission, while black hat hackers exploit vulnerabilities for malicious purposes",
            "White hat hackers engage in cybercrime, while black hat hackers help organizations",
            "White hat hackers work without any knowledge of vulnerabilities, while black hat hackers know them all",
            "White hat hackers use hacking tools, while black hat hackers do not"
          ],
          correctAnswer: "White hat hackers use their skills to improve security with permission, while black hat hackers exploit vulnerabilities for malicious purposes"
        },
        {
          type: "multiple",
            question: "What characterizes grey hat hackers?",
          options: [
            "They hack without authorization but without malicious intent, sometimes informing affected parties of vulnerabilities",
            "They always have malicious intent and engage in illegal activities",
            "They exclusively work to improve system security with permission",
            "They follow legal hacking practices and never exploit vulnerabilities"
          ],
          correctAnswer: "They hack without authorization but without malicious intent, sometimes informing affected parties of vulnerabilities"
        },
        {
          type: "multiple",
            question: "What is PowerShell used for?",
          options: [
            "Automating tasks and managing configurations in Windows systems",
            "Creating computer viruses",
            "Analyzing network traffic",
            "Protecting systems from cyber attacks"
          ],
          correctAnswer: "Automating tasks and managing configurations in Windows systems"
        },
        {
          type: "multiple",
            question: "What is the main difference between a red team and a blue team?",
          options: [
            "Red team attacks systems, blue team defends them",
            "Red team manages security, blue team breaks security systems",
            "Red team works to improve security, blue team exploits weaknesses",
            "Red team performs analysis, blue team writes code"
          ],
          correctAnswer: "Red team attacks systems, blue team defends them"
        },
        {
          type: "multiple",
            question: "What is a zero-day attack?",
          options: [
            "A cyber attack that takes advantage of a hidden vulnerability before it is discovered and patched",
            "An attack that is detected and stopped immediately",
            "An attack that happens on a specific day of the year",
            "An attack targeted at web applications"
          ],
          correctAnswer: "A cyber attack that takes advantage of a hidden vulnerability before it is discovered and patched"
        },
        {
          type: "multiple",
            question: "What is 2FA (Two-Factor Authentication)?",
          options: [
            "A security measure that requires two forms of verification to access an account",
            "A method to encrypt passwords",
            "A system to track user logins",
            "A protocol to manage network traffic"
          ],
          correctAnswer: "A security measure that requires two forms of verification to access an account"
        },
        {
          type: "multiple",
            question: "What is the main function of a firewall?",
          options: [
            "To protect the network by controlling incoming and outgoing traffic",
            "To specifically protect web applications from attacks",
            "To encrypt sensitive data",
            "To manage network addresses"
          ],
          correctAnswer: "To protect the network by controlling incoming and outgoing traffic"
        },
        {
          type: "multiple",
            question: "What does PII stand for?",
          options: [
            "Personally Identifiable Information",
            "Private Information Identification",
            "Public Internet Information",
            "Personal Identification Index"
          ],
          correctAnswer: "Personally Identifiable Information"
        },
        {
          type: "multiple",
            question: "What is PCI compliance related to?",
          options: [
            "Security standards for processing, storing, and transmitting payment card data",
            "Privacy rules for health information",
            "Protection of personally identifiable information",
            "Guidelines for data encryption"
          ],
          correctAnswer: "Security standards for processing, storing, and transmitting payment card data"
        },
        {
          type: "multiple",
            question: "What does PHI stand for?",
          options: [
            "Protected Health Information",
            "Private Health Insurance",
            "Personal Health Identifier",
            "Public Health Information"
          ],
          correctAnswer: "Protected Health Information"
        },
        {
            type: "multiple",
            question: "What are Indicators of Compromise (IOCs)?",
            options: [
              "Specific artifacts or traces left behind by cyber threats, such as malicious files or network traffic patterns",
              "A type of firewall used to protect networks from cyberattacks",
              "A program used to prevent viruses from spreading",
              "A method for encrypting communication between devices"
            ],
            correctAnswer: "Specific artifacts or traces left behind by cyber threats, such as malicious files or network traffic patterns"
          },
          {
            type: "multiple",
            question: "What is the primary purpose of a honeypot in cybersecurity?",
            options: [
              "To attract and lure potential attackers, allowing organizations to monitor and analyze their tactics",
              "To store sensitive data securely in the cloud",
              "To prevent network traffic from malicious sources",
              "To encrypt communications between networks"
            ],
            correctAnswer: "To attract and lure potential attackers, allowing organizations to monitor and analyze their tactics"
          },
          {
            type: "multiple",
            question: "What is the role of a DMZ (Demilitarized Zone) in network security?",
            options: [
              "It isolates publicly accessible services from the internal network, providing an added layer of security",
              "It is used to store backup copies of important data",
              "It encrypts the data being transmitted over the network",
              "It prevents unauthorized access to physical hardware"
            ],
            correctAnswer: "It isolates publicly accessible services from the internal network, providing an added layer of security"
          },
          {
            type: "multiple",
            question: "What is a sandbox in cybersecurity?",
            options: [
              "A controlled environment where suspicious software or files can be safely executed and analyzed",
              "A device that encrypts network traffic",
              "A type of malware used to attack networks",
              "A firewall used to protect against cyber threats"
            ],
            correctAnswer: "A controlled environment where suspicious software or files can be safely executed and analyzed"
          },
          {
            type: "multiple",
            question: "What does pseudonymity in online contexts mean?",
            options: [
              "Using a pseudonym for identification while remaining anonymous regarding one's true identity",
              "Sharing personal information under a real name",
              "Using encryption to secure data",
              "Monitoring a user's actions without their consent"
            ],
            correctAnswer: "Using a pseudonym for identification while remaining anonymous regarding one's true identity"
          },
          {
            type: "multiple",
            question: "Who can adversaries include in the context of cybersecurity?",
            options: [
              "Cybercriminals, hackers, nation-states, oppressive regimes, and others",
              "Only government officials",
              "Legal authorities monitoring online activities",
              "Users who accidentally spread malware"
            ],
            correctAnswer: "Cybercriminals, hackers, nation-states, oppressive regimes, and others"
          },
          {
            type: "multiple",
            question: "What is the primary difference between Simplex, Half-duplex, and Full-duplex communication modes?",
            options: [
              "Simplex allows one-way communication, Half-duplex allows two-way but not simultaneous communication, and Full-duplex allows simultaneous two-way communication",
              "Simplex allows two-way communication, Half-duplex allows one-way communication, and Full-duplex allows no communication",
              "Simplex only transmits data, Half-duplex encrypts data, and Full-duplex stores data",
              "There is no difference; all modes function the same"
            ],
            correctAnswer: "Simplex allows one-way communication, Half-duplex allows two-way but not simultaneous communication, and Full-duplex allows simultaneous two-way communication"
          },
          {
            type: "multiple",
            question: "What is a botnet in cybersecurity?",
            options: [
              "A network of infected computers or devices controlled by a central attacker, often used for cyberattacks",
              "A type of security firewall",
              "A software used to monitor network traffic",
              "A system designed to prevent hacking"
            ],
            correctAnswer: "A network of infected computers or devices controlled by a central attacker, often used for cyberattacks"
          },      
          {
            type: "multiple",
            question: "What protocol does ping operate over?",
            options: [
              "TCP",
              "UDP",
              "ICMP",
              "HTTP"
            ],
            correctAnswer: "ICMP"
          },
          {
            type: "multiple",
            question: "What is the key difference between a hub and a switch in a network?",
            options: [
              "A hub operates on Layer 1, while a switch operates on Layer 2 and is smarter in forwarding data",
              "A hub can forward data smarter than a switch",
              "A hub is used for routing data, while a switch is used for encryption",
              "A hub is more expensive than a switch"
            ],
            correctAnswer: "A hub operates on Layer 1, while a switch operates on Layer 2 and is smarter in forwarding data"
          },
          {
            type: "multiple",
            question: "What does static malware analysis involve?",
            options: [
              "Examining the malware without executing it, focusing on its code and structure",
              "Executing the malware in real-time to observe its behavior",
              "Monitoring network traffic to detect malware",
              "Using an antivirus tool to scan for malware"
            ],
            correctAnswer: "Examining the malware without executing it, focusing on its code and structure"
          },
          {
            type: "multiple",
            question: "What is the difference between closed and open systems?",
            options: [
              "Closed systems are not connected to the internet, while open systems are",
              "Closed systems are only used for internal purposes, while open systems are for external use",
              "Open systems cannot access the internet, while closed systems can",
              "Closed systems are secure, while open systems are vulnerable"
            ],
            correctAnswer: "Closed systems are not connected to the internet, while open systems are"
          },
          {
            type: "multiple",
            question: "What is the purpose of TTL (Time to Live) in network packets?",
            options: [
              "It determines how long the packet should be held before being discarded",
              "It specifies the packet's destination address",
              "It encrypts the packet for security",
              "It defines the maximum transfer speed of the packet"
            ],
            correctAnswer: "It determines how long the packet should be held before being discarded"
          },
          {
            type: "multiple",
            question: "What is the role of a default gateway in a network?",
            options: [
              "It enables communication between networks and allows devices to access external networks like the internet",
              "It stores user data and preferences",
              "It manages DNS requests",
              "It encrypts communication between devices"
            ],
            correctAnswer: "It enables communication between networks and allows devices to access external networks like the internet"
          },
          {
            type: "multiple",
            question: "What is the primary function of a host-based firewall?",
            options: [
              "It provides personalized protection for a single device against malware and attacks",
              "It protects the entire network from external threats",
              "It monitors network traffic and stores encrypted data",
              "It creates secure tunnels for virtual private networks"
            ],
            correctAnswer: "It provides personalized protection for a single device against malware and attacks"
          },
          {
            type: "multiple",
            question: "What is the difference between stateful and stateless firewalls?",
            options: [
              "Stateful firewalls track connection states, while stateless firewalls analyze each packet in isolation",
              "Stateful firewalls are faster and less resource-intensive than stateless firewalls",
              "Stateful firewalls only block traffic, while stateless firewalls allow traffic",
              "Stateful firewalls work on Layer 3, while stateless firewalls work on Layer 2"
            ],
            correctAnswer: "Stateful firewalls track connection states, while stateless firewalls analyze each packet in isolation"
          },
          {
            type: "multiple",
            question: "What is the key distinction between signature-based and behavior-based antivirus programs?",
            options: [
              "Signature-based antivirus detects malware by its signature, while behavior-based antivirus monitors unusual user behavior",
              "Signature-based antivirus scans for network traffic, while behavior-based antivirus monitors files",
              "Signature-based antivirus blocks attacks, while behavior-based antivirus logs activity",
              "Signature-based antivirus works faster than behavior-based antivirus"
            ],
            correctAnswer: "Signature-based antivirus detects malware by its signature, while behavior-based antivirus monitors unusual user behavior"
          },
          {
            type: "multiple",
            question: "What is the main difference between 'Deny' and 'Block' in firewall rules?",
            options: [
              "'Deny' sends an ICMP message to indicate the connection is not allowed, while 'Block' silently drops the traffic",
              "'Deny' works on outbound traffic, while 'Block' works on inbound traffic",
              "'Deny' only blocks certain types of data, while 'Block' blocks all data",
              "'Deny' applies to websites, while 'Block' applies to applications"
            ],
            correctAnswer: "'Deny' sends an ICMP message to indicate the connection is not allowed, while 'Block' silently drops the traffic"
          },
          {
            type: "multiple",
            question: "What are the common steps for troubleshooting a network issue?",
            options: [
              "Check the Hardware -> Use Ipconfig -> Ping and Tracert -> Perform a DNS Check -> Reviewing Logs",
              "Check the Hardware -> Reviewing Logs -> Use Ipconfig -> Ping and Tracert -> Perform a DNS Check",
              "Use Ipconfig -> Check the Hardware -> Reviewing Logs -> Ping and Tracert -> Perform a DNS Check",
              "Ping and Tracert -> Check the Hardware -> Use Ipconfig -> Reviewing Logs -> Perform a DNS Check"
            ],
            correctAnswer: "Check the Hardware -> Use Ipconfig -> Ping and Tracert -> Perform a DNS Check -> Reviewing Logs"
          },
          {
            type: "multiple",
            question: "What is bandwidth in networking?",
            options: [
              "The maximum transfer rate of data through a cable",
              "The maximum number of devices that can connect to a network",
              "The time it takes for a packet to travel across a network",
              "The amount of storage available for data in a network"
            ],
            correctAnswer: "The maximum transfer rate of data through a cable"
        },      

        // --------------- open answers questions ---------------
        {
            type: "open",
            question: "This port number is used for FTP data transfer, specifically for transferring files between a client and a server.",
            correctAnswer: "20"
        },
        {
            type: "open",
            question: "This port number is used for FTP command control, responsible for managing session commands like authentication and directory changes.",
            correctAnswer: "21"
        },
        {
            type: "open",
            question: "This port number is used by SSH, allowing secure remote access to systems and encrypted communication.",
            correctAnswer: "22"
        },
        {
            type: "open",
            question: "This port number is used by TELNET, allowing remote command-line interface access to network devices or computers.",
            correctAnswer: "23"
        },
        {
            type: "open",
            question: "This port number is used by SMTP to send email messages between servers.",
            correctAnswer: "25"
        },
        {
            type: "open",
            question: "This port number is used by DNS for querying domain names and resolving them into IP addresses.",
            correctAnswer: "53"
        },
        {
            type: "open",
            question: "This port number is used by HTTP to serve web page data over the internet.",
            correctAnswer: "80"
        },
        {
            type: "open",
            question: "This port number is used by POP3 for retrieving email messages from a remote mail server.",
            correctAnswer: "110"
        },
        {
            type: "open",
            question: "This port number is used by IMAP for accessing and managing email stored on a remote mail server.",
            correctAnswer: "143"
        },
        {
            type: "open",
            question: "This port number is used by SNMP to monitor and manage network devices such as routers and switches.",
            correctAnswer: "161"
        },
        {
            type: "open",
            question: "This port number is used by HTTPS to secure communication between web browsers and web servers, ensuring encrypted data transfer.",
            correctAnswer: "443"
        },
        {
            type: "open",
            question: "This protocol is a reliable, connection-oriented protocol that ensures the reliable delivery of data and is a core protocol in the TCP/IP suite.",
            correctAnswer: "TCP"
        },
        {
            type: "open",
            question: "This protocol is a lightweight, connectionless protocol that provides fast but unreliable communication, commonly used for real-time applications like streaming and online gaming.",
            correctAnswer: "UDP"
        },
        {
            type: "open",
            question: "This protocol is used for diagnostic and error reporting purposes in IP networks, facilitating the exchange of control messages like ping requests and responses.",
            correctAnswer: "ICMP"
        },
        {
            type: "open",
            question: "This protocol automatically assigns IP addresses and network configuration parameters to devices on a network, simplifying network setup.",
            correctAnswer: "DHCP"
        },
        {
            type: "open",
            question: "This protocol, developed by Microsoft, allows remote access and control of a computer or server over a network, enabling users to interact as if they were physically present.",
            correctAnswer: "RDP"
        },
        {
            type: "open",
            question: "This protocol is used for managing and monitoring network devices, such as routers and switches, allowing administrators to gather information and monitor network performance.",
            correctAnswer: "SNMP"
        },
        {
            type: "open",
            question: "This protocol is used for clock synchronization between devices on a network, ensuring accurate and synchronized time for various operations.",
            correctAnswer: "NTP"
        },
        {
            type: "open",
            question: "This suite of protocols provides secure communication and data integrity over IP networks, commonly used to establish virtual private networks (VPNs).",
            correctAnswer: "IPsec"
        },
        {
            type: "open",
            question: "This protocol is used to resolve an IP address to a MAC address on a local network, enabling devices to obtain the MAC address associated with a specific IP address.",
            correctAnswer: "ARP"
        },
    ]
};  

export default TechServiceEngineerQuiz;