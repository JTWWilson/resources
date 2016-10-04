
Memory
--------

##Basics

In modern computers the term Read Only Memory is somewhat of a misnomer.
ROM refers to a class of memory where the data is *hardwired and therefore can not be changed*. In reality, modern ROM can be altered, but not within the normal operations of the computer system.
ROM is classed as *non-volatile* memory.


####In any computer system, there are two types of storage, the **volatile storage** and the non-**volatile storage**. 
#####The main difference between volatile and non-volatile storage is what happens when you turn-off the power. With non-volatile storage, as long as the data has already been written, it will remain for a considerable amount of time; typically hundreds of years. However, volatile memory needs constant power in order to retain the stored data. Once the power goes out, the data is lost almost instantly.

###Uses
####Non-volatile storage 
#####E.g. <b>R</b>ead <b>O</b>nly <b>M</b>emory 
![ROM](http://amigakit.leamancomputing.com/catalog/images/kickstart-rom.jpg)
- Ideal for storing data for long term storage. 
- Non-volatile storage is can now reach a few TB for hard drives and it is in the range of GB for most solid state drives.
- Upgrading non-volatile storage gives you more space to save files. So you can install more applications and games while still having space for movies, music, and even large back-up 

####ROM
The main set of instructions stored on ROM is the **BIOS**.
BIOS stands for **Basic Input/Output System**.
The BIOS provides instructions for the processor allowing it to interact with the Hard Disk and therefore boot the Operating System.
Without the BIOS, the Operating System could not be booted.
Needs to be *non-volatile* as it would otherwise be lost


####Volatile storage 
#####E.g. <b>R</b>andom <b>A</b>ccess <b>M</b>emory, CPU cache
![RAM](https://panel.cinfu.com/images/kb/ram.jpg)

- Loses all of its content when it is turned off
- It cannot be used to reliably store information, so it is used by the system to temporarily hold information. 
- Volatile memory is typically thousands of times faster than most non-volatile storage. Faster is better as it prevents the creation of a bottleneck as processers get faster and faster.
- Volatile memory is quite expensive per unit so typical capacities of volatile memory tend to be lower; from MBs to a few GBs.
- Upgrading volatile memory should give you enhanced system performance, especially when under heavy loads or doing multitasking as the CPU can get information from its temporary storage quicker

####Cache Memory

Cache is required because processors are so fast, that if they had to retrieve all data and instructions from RAM, they would spend a long time waiting.   
Cache memory is much faster than RAM.  
In general there are three levels of CPU cache.  
Cache memory holds the most regularly accessed data or instuctions so that they're more quickly availiable, increasing a computer's performance.  

- **L1** Cache is built into the processor, with a typical size of 64Kb. This cache is small but exceptionally fast.
- **L2** Cache was originally separate to the CPU, but in modern computers it is integrated. L2 Cache is slower than L1, but generally larger in size - up to 2Mb.
- **L3** Cache is memory that is situated on the motherboard. It is slower than the others but has a larger size - up to 8Mb.
- There are three principles involved in deciding which data are stored in Cache.
  - **Temporal locality** - CPU has accessed some data and is likely to need the same data again soon.
  - **Spatial locality** - CPU has accessed some data and is likely to need data stored close by.
  - **Sequential locality** - CPU has accessed some data and is likely that it will need data stored in the next location.


####Static RAM and DRAM
(*<b>D</b>ynamic* **RAM**)

- Static RAM is made up of flip-flop memory cells.
- A single flip-flop for a memory cell takes four or six transistors along with some wiring, but never has to be refreshed. 
- This makes static RAM significantly faster than dynamic RAM. 
- However, because it has more parts, a static memory cell takes up a lot more space on a chip than a dynamic memory cell. 
- Therefore, you get less memory per chip, and that makes static RAM a lot more expensive.
- The quick, rapid response Static RAM is used for the CPU's speed-sensitive cache while dynamic RAM forms the larger system RAM space as it is cheaper.


####PC Buses

- A bus is basically the cables that connect different parts of a PC to each other.
- The size of a bus, known as its width, is important because it determines how much data can be transmitted at one time. The bus size actually indicates the number of wires in the bus. 
 - For example, a 32-bit bus has 32 wires or connectors that transmit 32 bits simultaneously. It would be considered "32-bits wide." 

####RAM Latency

- An *access time* check tells us how many clock cycles the memory module will delay in returning data requested by the CPU. 
 - A memory module with a CL 9 will delay nine clock cycles to deliver a requested data, whereas a memory module with a CL 7 will delay seven clock cycles to deliver it. 
 - While both modules may run at the same clock rate, the second one will be faster, as it will deliver data sooner than the first one. 
- This issue is known as “**latency**.” 

####Virtual Memory

Virtual memory is a common part of most operating systems on desktop computers. It has become so common because it provides a big benefit for users at a very low cost.

- Most computers today have something like 64 or 128 megabytes of RAM (random-access memory) available for use by the CPU (central processing unit). 
- Often, that amount of RAM is not enough to run all of the programs that most users expect to run at once. For example, if you load the Windows operating system, an e-mail program, a Web browser and word processor into RAM simultaneously, 64 megabytes is not enough to hold it all. 
- If there were no such thing as virtual memory, your computer would have to say, "*Sorry, you cannot load any more applications. Please close an application to load a new one.*" 
- With **virtual memory**, the computer can look for areas of RAM that have not been used recently and copy them onto the hard disk. 
- Because hard-disk space is so much cheaper than RAM chips, virtual memory also provides a nice economic benefit.
- However, hard-disks are much slower to react than RAM (milliseconds rather than naoseconds) 

####Hard Disks

- Hard disks are a class of non-volatile memory.
- In most computers, the HD is used to store the operating system, applications and user data.
- Hard disks are mechanical in nature, and this is one of the reasons they are so slow.
- Hard disks can store vast quantities of data, and 2+ Tb drives are not unusual.


####All of these storage methods can be summed up by the following:
![Storage Hierarchy](https://bournetocode.com/projects/GCSE_Computing_Fundamentals/pages/img/computer-memory-pyramid.gif)
